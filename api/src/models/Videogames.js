const { DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("videogames", {
        id: {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },

        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },

        released: {
            type: DataTypes.STRING,
        },

        rating: {
            type: DataTypes.FLOAT,
        },

        platform: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
        },

        image:{
            type: DataTypes.STRING,
        }
    },{ timestamps: false }
    );
};