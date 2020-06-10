import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
import {
  HasManyGetAssociationsMixin,
  HasManyAddAssociationMixin,
  HasManyHasAssociationMixin,
  Association,
  HasManyCountAssociationsMixin,
  HasManyCreateAssociationMixin,
} from 'sequelize';

const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/wander';

const sequelize = new Sequelize(connectionString);

interface UserModel extends Model {
  readonly id: number;
  username: string;
  password: string;
}

type UserModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): UserModel;
};

const UserDefineModel = <UserModelStatic>sequelize.define('UserDefineModel', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export function stuffTwo() {
  UserDefineModel.findByPk(1, {
    rejectOnEmpty: true,
  }).then((myModel) => {
    console.log(myModel.id);
  });
}

// const User = sequelize.define(
//   'user',
//   {
//     id: {
//       type: Sequelize.STRING,
//       allowNull: false,
//     },
//     username: {
//       type: Sequelize.STRING,
//       allowNull: false,
//     },
//     password: {
//       type: Sequelize.STRING,
//       // allowNull defaults to true
//     },
//   },
//   {
//     // options
//   },
// );
