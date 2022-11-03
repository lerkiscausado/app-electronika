
import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const Favorites =sequelize.define('favorites',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    description:{
        type: DataTypes.TEXT,
        allowNull:true
    },
    small:{
        type: DataTypes.STRING,
        allowNull:true
    },
    regular:{
        type: DataTypes.STRING,
        allowNull:true
    }

});