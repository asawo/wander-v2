import { Sequelize, Model, DataTypes } from 'sequelize';
// import {
//   HasManyGetAssociationsMixin,
//   HasManyAddAssociationMixin,
//   HasManyHasAssociationMixin,
//   Association,
//   HasManyCountAssociationsMixin,
//   HasManyCreateAssociationMixin,
// } from 'sequelize';

import { Doggos } from './doggos';
import { CONNECTION_STRING } from '../config/constants';
const sequelize = new Sequelize(CONNECTION_STRING);
const TABLE_NAME = 'users';

class Users extends Model {
  public userid!: number;
  public username!: string;
  public password!: string;

  // public readonly doggos?: Doggos[];
  // public static associations: {
  //   likes: Association<Users, Doggos>;
  // };
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
