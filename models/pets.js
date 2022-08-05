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
      type: DataType.STRING,
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
    },
    owner_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
    }
    },//set to take multiple immun
  //   immunization_id: {
  //     type: DataTypes.INTEGER,
  //     references: {
  //     model: 'immunization',
  //     key: 'id'
  //   }
  // },
  //add appt id
  
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "pet",
  }
);

module.exports = { Pet };
