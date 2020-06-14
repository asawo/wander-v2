import { Sequelize, Model, DataTypes } from 'sequelize';
import { CONNECTION_STRING } from '../config/constants';
import { Likes } from './likes';
const sequelize = new Sequelize(CONNECTION_STRING);
const TABLE_NAME = 'doggos';

class Doggos extends Model {
  public doggoid!: number;
  public userid!: number;
  public doggoname?: string;
  public description?: string;
  public datecreated!: Date;
  public dateupdated!: Date;
  public imageurl!: string;
  public username!: string;
}

Doggos.init(
  {
    doggoid: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    userid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    doggoname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    datecreated: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    dateupdated: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    imageurl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: TABLE_NAME,
    timestamps: false,
    sequelize: sequelize,
  },
);

Doggos.hasMany(Likes, {
  sourceKey: 'doggoid',
  foreignKey: 'doggoid',
});

export { Doggos };
