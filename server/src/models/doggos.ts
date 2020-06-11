import { Sequelize, Model, DataTypes } from 'sequelize';
import { Users } from './users';

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

  public static attach(sequelize: Sequelize): void {
    this.init(
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
        imgageurl: {
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
        underscored: true,
        sequelize: sequelize,
      },
    );
  }

  public static associate(): void {
    Doggos.hasOne(Users, {
      foreignKey: 'userid',
      as: 'doggos',
    });
  }
}

const factory = (sequelize: Sequelize) => {
  Doggos.attach(sequelize);

  return Doggos;
};

export { Doggos, factory };
