const { Owner } = require('../models');

const ownerData = [
    {
        user_id: '7',
        pet_id: '1'
    },
    {
        user_id: '8',
        pet_id: '2'
    },
    {
        user_id: '9',
        pet_id: '3'
    },
    {
        user_id: '10',
        pet_id: '4'
    },
    {
        user_id: '11',
        pet_id: '5'
    },
    {
        user_id: '12',
        pet_id: '6'
    },
    {
        user_id: '13',
        pet_id: '7'
    },
    {
        user_id: '14',
        pet_id: '8'
    },
    {
        user_id: '15',
        pet_id: '9'
    },
    {
        user_id: '16',
        pet_id: '10'
    },
    {
        user_id: '17',
        pet_id: '11'
    },
    {
        user_id: '18',
        pet_id: '12'
    },
    {
        user_id: '19',
        pet_id: '13'
    },
    {
        user_id: '20',
        pet_id: '14'
    },
    {
        user_id: '21',
        pet_id: '15'
    },
    {
        user_id: '22',
        pet_id: '16'
    },
    {
        user_id: '23',
        pet_id: '17'
    },
    {
        user_id: '24',
        pet_id: '18'
    },
    {
        user_id: '25',
        pet_id: '19'
    }
]

const seedOwners = () => Owner.bulkCreate(ownerData);
module.exports = seedOwners;