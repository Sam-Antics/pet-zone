class Staff extends Model {}

Staff.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        salary: DataType.DECIMAL
    },
    user_id: {
        type: DataType.INTEGER,
        references: {
          model: 'user',
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
    modelName: 'staff'
  }
);
    
    
    module.exports = { Staff };