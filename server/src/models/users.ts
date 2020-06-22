import { Sequelize, Model, DataTypes } from 'sequelize';
import { Doggos } from './doggos';
import { sequelize } from '../config/constants';

const TABLE_NAME = 'users';

class Users extends Model {
  public userid!: number;
  public username!: string;
  public password!: string;
}

Users.init(
  {
    userid: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
    },
  },
  {
    tableName: TABLE_NAME,
    timestamps: false,
    sequelize,
  },
);

Users.hasMany(Doggos, {
  sourceKey: 'userid',
  foreignKey: 'userid',
});

export { Users };
