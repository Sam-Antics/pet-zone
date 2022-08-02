class Department extends Model {}

Department.init(
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
    staff_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'staff',
          key: 'id'
        }
      }
    },    
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: "department",
    }
    );
    
    module.exports = { Department };