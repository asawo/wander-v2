import { Sequelize, Model, DataTypes } from 'sequelize';
import { CONNECTION_STRING } from '../config/constants';
const sequelize = new Sequelize(CONNECTION_STRING);
const TABLE_NAME = 'test';

class Test extends Model {
  public id!: number;
  public user!: string;
}

Test.init(
  {
    id: {
      type: new DataTypes.INTEGER(),
      autoIncrement: true,
      primaryKey: true,
    },
    user: {
      type: new DataTypes.STRING(),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'test',
    timestamps: false,
  },
);

export { Test };
