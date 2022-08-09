// import models
const User = require('./users');
const Staff = require('./staff');
const Owner = require('./owners');
const Pet = require('./pets');
const Comment = require('./comments');

// const Department = require('./departments');
// const Immunization = require('./immunizations');
// const Boarding = require('./boardings');
// const Grooming = require('./groomings');


//associations

User.hasOne(Staff, {
    foreignKey: "user_id"
});

Staff.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasOne(Owner, {
    foreignKey: "user_id"
});

Owner.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});


Owner.hasMany(Pet, {
    onDelete: 'CASCADE'
});

Pet.belongsTo(Owner, {
    foreignKey: 'owner_id',
    onDelete: 'CASCADE'
});


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

// Appointments.hasMany(Pet, {
//   foreignKey: "pet_id",
// });

// Appointments.hasMany(Staff, {
//   foreignKey: "staff_id",
// });


module.exports = { User, Staff, Pet, Owner, Comment };



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