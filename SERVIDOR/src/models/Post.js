const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "Post", {
        id: {
            type: DataTypes.INTEGER, // Entero 
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        body: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    { timestamps: false, freezeTableName: true }
  );
};
