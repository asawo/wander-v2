import { Sequelize, Model, DataTypes } from 'sequelize';
const TABLE_NAME = 'test';

class Test extends Model {
  public id!: number;
  public user!: string;

  public static attach(sequelize: Sequelize): void {
    this.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        user: {
          type: new DataTypes.STRING(),
          allowNull: false,
        },
      },
      {
        tableName: TABLE_NAME,
        sequelize: sequelize,
        timestamps: false,
      },
    );
  }
}

export { Test };
