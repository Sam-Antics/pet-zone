class Boarding extends Model {}

Boarding.init(
{
    boarding_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    start_date: {
        type: DataTypes.DATE
    },
    end_date: {
        type: DataTypes.DATE
    },
    special_diet: {
        type: DataTypes.STRING
    },
    notes: {
        type: DataTypes.STRING
    },
    pet_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'pet',
            key: 'id'
        }
    }//join to pets many to many
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "boarding",
  }
);

module.exports = { Boarding };