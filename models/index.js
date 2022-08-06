// import models

const User = require('../models/users');
const Staff = require('../models/staff');
// const Department = require('./departments');
// const Owner = require('./owners');
const Pet = require('../models/pets');
const Owner = require('../models/owners');
// const Comment = require('./comments');
// const Immunization = require('./immunizations');
// const Boarding = require('./boardings');
// const Grooming = require('./groomings');


//associations

// User.hasMany(Staff, {
//     foreignKey: "user_id"
// });

// Staff.belongsTo(User, {
//     foreignKey: 'user_id'
// });


// User.hasMany(Owner, {
//     foreignKey: "user_id"
// });

// Owner.belongsTo(User, {
//     foreignKey: 'user_id'
// });

// User.hasMany(Comment, {
//     foreignKey: 'user_id',
//     onDelete: 'SET NULL'
// });

// Owner.hasMany(Pet, {
//     foreignKey: 'owner_id'
// });

// Pet.belongsTo(Owner, {
//     foreignKey: 'owner_id'
// });

// Pet.hasMany(Immunizaton, {
//     foreignKey: 'pet_id'
// });

// Immunizaton.belongsTo(Pet, {
//     foreignKey: 'pet_id',
//     onDelete: 'SET NULL'
// });

// Pet.hasMany(Grooming, {
//     foreignKey: 'pet_id',
//     onDelete: 'SET NULL'
// });

// Grooming.belongsTo(Pet, {
//     foreignKey: 'pet_id',
//     onDelete: 'SET NULL'
// });

// Pet.hasMany(Boarding, {
//     foreignKey: 'pet_id'
// });

// Boarding.belongsTo(Pet, {
//     foreignKey: 'pet_id',
//     onDelete: 'SET NULL'
// });

// Comment.belongsTo(User, {
//     foreignKey: 'user_id',
//     onDelete: 'SET NULL'
//   });
  
//   User.hasMany(Comment, {
//     foreignKey: 'user_id',
//     onDelete: 'SET NULL'
//   });
  
Pet.belongsTo(Owner, {
  foreignKey: "owner_id",
});

// Appointments.hasMany(Pet, {
//   foreignKey: "pet_id",
// });

// Appointments.hasMany(Staff, {
//   foreignKey: "staff_id",
// });

module.exports = { User, Staff, Pet, Owner };


//Future Options:
//adjust for many to many
// Pet.hasMany(Immunizaton, {
//     foreignKey: 'pet_id'
// });

// Immunizaton.belongsTo(Pet, {
//     foreignKey: 'immunization_id',
//     onDelete: 'SET NULL'
// });

// Pet.hasMany(Grooming, {
//     foreignKey: 'pet_id',
//     onDelete: 'SET NULL'
// });

// Grooming.belongsTo(Pet, {
//     foreignKey: 'pet_id',
//     onDelete: 'SET NULL'
// });

// Pet.hasMany(Boarding, {
//     foreignKey: 'pet_id'
// });

// Boarding.belongsTo(Pet, {
//     foreignKey: 'pet_id',
//     onDelete: 'SET NULL'
// });

//module.exports = { User, Owner, Staff, Pet, Immunization, Comment, Boarding, Grooming, Department };

