const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('genres', {
        id: {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    }, {timestamps: false}
    );
};