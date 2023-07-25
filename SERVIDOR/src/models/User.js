const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "User", {
        id: {
            type: DataTypes.UUID, // Alfanumerico
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [5, 10],
                    msg: "El nombre debe contener entre 5 y 10 caracteres",
                },
            },
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true, 
            validate: {
                isEmail: {
                    msg: "Debe ser un email valido",
                },
            },
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    { timestamps: false, freezeTableName: true }
  );
};
