const { Owner } = require('../models');

const ownerData = [
    {
        user_id: '',
        pet_id: '',
    },
    {
        user_id: '',
        pet_id: '',
    },
    {
        user_id: '',
        pet_id: '',
    },
    {
        user_id: '',
        pet_id: '',
    },
    {
        user_id: '',
        pet_id: '',
    },
    {
        user_id: '',
        pet_id: '',
    },
    {
        user_id: '',
        pet_id: '',
    },
    {
        user_id: '',
        pet_id: '',
    },
    {
        user_id: '',
        pet_id: '',
    },
    {
        user_id: '',
        pet_id: '',
    },
    {
        user_id: '',
        pet_id: '',
    },
    {
        user_id: '',
        pet_id: '',
    },
    {
        user_id: '',
        pet_id: '',
    },
    {
        user_id: '',
        pet_id: '',
    },
    {
        user_id: '',
        pet_id: '',
    }
]

const seedOwners = () => Owner.bulkCreate(ownerData);
module.exports = seedOwners;