//associations

User.hasMany(Staff, {
    foreignKey: "user_id"
});

Staff.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Owner, {
    foreignKey: "user_id"
});

Owner.belongsTo(User, {
    foreignKey: 'user_id'
});

Owner.hasMany(Pet, {
    foreignKey: 'owner_id'
});

Pet.belongsTo(Owner, {
    foreignKey: 'owner_id'
});

Pet.hasMany(Immunizaton, {
    foreignKey: 'pet_id'
});

// Immunizaton.hasMany(Pet {
//     foreignKey: 'pet_id'
// });

Pet.hasMany(Grooming, {
    foreignKey: 'pet_id'
});

Pet.hasMany(Boarding, {
    foreignKey: 'pet_id'
});






