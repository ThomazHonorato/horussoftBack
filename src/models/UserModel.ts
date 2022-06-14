import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface UserInstance extends Model {
    id: number;
    name: string;
    age: number;
}

export const User = sequelize.define<UserInstance>("User", {
    id_user: {
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED
    },
    nome: {
        type: DataTypes.STRING,
        defaultValue: null
    },
    idade: {
        type: DataTypes.INTEGER,
        defaultValue: 18
    },
    created_at: {
        type: DataTypes.DATE
    }
}, {
    tableName: 'users',
    timestamps: false
});