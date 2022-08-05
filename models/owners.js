const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Owner extends Model {}

Owner.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
      } 
    },
    pet_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'pet',
          key: 'id'
      }
      },
      comment_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'comment',
          key: 'id'
        }
      }
  },
      {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'owner'
      }
    );
    
    
    module.exports = Owner;