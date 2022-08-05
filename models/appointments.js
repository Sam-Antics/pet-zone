class Appointment extends Model {}

Appointment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    date_time: {
      type: DataTypes.DATE,
      //expects yyyy-mm-dd HH:MM:SS
    },
    pet_id: {
      type: DataType.INTEGER,
      references: {
        model: "pet",
        key: "id",
      },
    },
    staff_id: {
      type: DataType.INTEGER,
      references: {
        model: "staff",
        key: "id",
      },
    },
    appointment_type: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "event",
  }
);

module.exports = { Appointment };
