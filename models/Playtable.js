const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Playtable extends Model { }

Playtable.init(
    {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'playtable',
}
);

module.exports = Playtable
