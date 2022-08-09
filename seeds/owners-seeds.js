const { Owner } = require('../models');

const ownerData = [
    {
        user_id: '7'
    },
    {
        user_id: '8'
    },
    {
        user_id: '9'
    },
    {
        user_id: '10'
    },
    {
        user_id: '11'
    },
    {
        user_id: '12'
    },
    {
        user_id: '13'
    },
    {
        user_id: '14'
    },
    {
        user_id: '15'
    },
    {
        user_id: '16'
    },
    {
        user_id: '17'
    },
    {
        user_id: '18'
    },
    {
        user_id: '19'
    },
    {
        user_id: '20'
    },
    {
        user_id: '21'
    },
    {
        user_id: '22'
    },
    {
        user_id: '23'
    },
    {
        user_id: '24'
    },
    {
        user_id: '25'
    }
]

const seedOwners = () => Owner.bulkCreate(ownerData);
module.exports = seedOwners;