import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
import { CONNECTION_STRING } from '../config/constants';
// import { Test } from '../models/test';

const sequelize = new Sequelize(CONNECTION_STRING);

// initialize class
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

// queries
export const test = async (num: number) => {
  try {
    const result: any = await Test.findByPk(num);
    console.log('response: ', result.dataValues);

    return result;
  } catch (err) {
    console.log('promise error ', err);
  }
};
