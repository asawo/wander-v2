import { Users } from '../models/users';
import { Likes } from '../models/likes';
import { Doggos } from '../models/doggos';

export const createUser = async (username: string, password: string) => {
  try {
    const result: any = await Users.create(
      {
        username: username,
        password: password,
      },
      {
        fields: ['userid', 'username', 'password'],
      },
      // {
      //   raw: true,
      // },
    );
    console.log('createUser: ', result.dataValues);
    return result;
  } catch (error) {
    console.log('Error: ', error);
  }
};

export const deleteUser = async (username: string) => {
  try {
    const result: any = await Users.destroy({
      where: {
        username: username,
      },
    });
    console.log('deleteUser: ', result);

    return result;
  } catch (error) {
    console.log('Error: ', error);
  }
};

export const getAllUsers = async () => {
  try {
    const result: any = await Users.findAll({
      raw: true,
    });
    console.log('getAllUsers: ', result);

    return result;
  } catch (err) {
    console.log('test1 ', err);
  }
};

// export const test2 = async (num: number) => {
//   try {
//     const result: any = await Doggos.findAll({
//       where: {
//         doggoid: 27,
//       },
//       raw: true,
//     });
//     console.log('test response 2: ', result);

//     return result;
//   } catch (err) {
//     console.log('test2 ', err);
//   }
// };

// export const test3 = async (num: number) => {
//   try {
//     const result: any = await Likes.findAll({
//       where: {
//         doggoid: 27,
//       },
//       raw: true,
//     });
//     console.log('test response 3: ', result);

//     return result;
//   } catch (err) {
//     console.log('test3 ', err);
//   }
// };
