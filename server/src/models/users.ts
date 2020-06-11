import { Sequelize, Model, DataTypes } from 'sequelize';
import { Doggos } from './doggos';
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/wander';
const sequelize = new Sequelize(connectionString);

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
    Users.hasOne(Doggos, {
      foreignKey: 'userid',
    });
  }
}

const factory = (sequelize: Sequelize) => {
  Users.attach(sequelize);

  return Users;
};

export { Users, factory };
