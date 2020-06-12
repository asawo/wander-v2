// import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';

import { Test } from '../models/test';

// queries
export const test = async (num: number) => {
  try {
    const result: any = await Test.findAll({
      raw: true,
    });
    console.log('response: ', result);

    return result;
  } catch (err) {
    console.log('promise error ', err);
  }
};
