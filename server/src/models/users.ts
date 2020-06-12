import { Sequelize, Model, DataTypes } from 'sequelize';
import { Doggos } from './doggos';

const TABLE_NAME = 'users';

class Users extends Model {
  public userid!: number;
  public username!: string;
  public password!: string;

  public static attach(sequelize: Sequelize): void {
    this.init(
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
        underscored: true,
        sequelize: sequelize,
      },
    );
  }

  public static associate(): void {
    Users.hasMany(Doggos, {
      foreignKey: 'userid',
    });
  }
}

const factory = (sequelize: Sequelize) => {
  Users.attach(sequelize);

  return Users;
};

export { Users, factory };
