// import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';

// import { Test } from '../models/test';
import { Users } from '../models/users';
import { Likes } from '../models/likes';
import { Doggos } from '../models/doggos';

// queries
// export const test = async (num: number) => {
//   try {
//     const result: any = await Test.findAll({
//       raw: true,
//     });
//     console.log('response: ', result);

//     return result;
//   } catch (err) {
//     console.log('promise error ', err);
//   }
// };

export const test1 = async (num: number) => {
  try {
    const result: any = await Users.findAll({
      raw: true,
    });
    console.log('response 1: ', result);

    return result;
  } catch (err) {
    console.log('test1 ', err);
  }
};

export const test2 = async (num: number) => {
  try {
    const result: any = await Doggos.findAll({
      raw: true,
    });
    console.log('response 2: ', result);

    return result;
  } catch (err) {
    console.log('test2 ', err);
  }
};

export const test3 = async (num: number) => {
  try {
    const result: any = await Likes.findAll({
      raw: true,
    });
    console.log('response 3: ', result);

    return result;
  } catch (err) {
    console.log('test3 ', err);
  }
};
