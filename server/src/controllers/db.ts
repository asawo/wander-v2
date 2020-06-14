import { Users } from '../models/users';
import { Likes } from '../models/likes';
import { Doggos } from '../models/doggos';

export const test1 = async (num: number) => {
  try {
    const result: any = await Users.findAll({
      where: {
        userid: 53,
      },
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
      where: {
        doggoid: 27,
      },
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
      where: {
        doggoid: 27,
      },
      raw: true,
    });
    console.log('response 3: ', result);

    return result;
  } catch (err) {
    console.log('test3 ', err);
  }
};
