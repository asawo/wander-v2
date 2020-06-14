import { Sequelize, Model, DataTypes } from 'sequelize';
// import { CONNECTION_STRING } from '../config/constants';
// const sequelize = new Sequelize(CONNECTION_STRING);
import { dbConfig } from '../config/constants';

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: 'postgres',
  port: 5432,
});

const TABLE_NAME = 'likes';

class Likes extends Model {
  public id!: number;
  public userid!: number;
  public doggoid!: number;
  public dateliked!: Date;
  public likecount!: number;
}

Likes.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    userid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    doggoid: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    dateliked: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    likecount: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: TABLE_NAME,
    timestamps: false,
    sequelize,
  },
);

export { Likes };
