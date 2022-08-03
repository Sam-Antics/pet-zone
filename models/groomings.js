class Grooming extends Model {}

Grooming.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    pet_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'pet',
        key: 'id'
    }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "grooming",
  }
);

module.exports = { Grooming };