const { Owner } = require('../models');

const ownerData = [
    {
        user_id: '7',
        // pet_id: '',
    },
    {
        user_id: '8',
        // pet_id: '',
    },
    {
        user_id: '9',
        // pet_id: '',
    },
    {
        user_id: '10',
        // pet_id: '',
    },
    {
        user_id: '11',
        // pet_id: '',
    },
    {
        user_id: '12',
        // pet_id: '',
    },
    {
        user_id: '13',
        // pet_id: '',
    },
    {
        user_id: '14',
        // pet_id: '',
    },
    {
        user_id: '15',
        // pet_id: '',
    },
    {
        user_id: '16',
        // pet_id: '',
    },
    {
        user_id: '17',
        // pet_id: '',
    },
    {
        user_id: '18',
        // pet_id: '',
    },
    {
        user_id: '19',
        // pet_id: '',
    },
    {
        user_id: '20',
        // pet_id: '',
    },
    {
        user_id: '21',
        // pet_id: '',
    },
    {
        user_id: '22',
        // pet_id: '',
    },
    {
        user_id: '23',
        // pet_id: '',
    },
    {
        user_id: '24',
        // pet_id: '',
    },
    {
        user_id: '25',
        // pet_id: '',
    }
]

const seedOwners = () => Owner.bulkCreate(ownerData);
module.exports = seedOwners;