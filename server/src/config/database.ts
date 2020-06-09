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

module.exports = new Sequelize(connectionString);
