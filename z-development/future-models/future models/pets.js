const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Pet extends Model {}

Pet.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    breed: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER
    },
    color: {
      type: DataTypes.STRING,
    },
    allergies: {
      type: DataTypes.STRING,
    },
    diet: {
      type: DataTypes.TEXT
    }
    // owner_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'user',
    //     key: 'id'
    // }
    // },
    // immunization_id: {
    //   type: DataTypes.INTEGER,
    //   model: 'immunization',
    //   key: 'id'
    // }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "pet",
  }
);

module.exports = Pet;
