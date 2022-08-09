const { Staff } = require('../models');

const staffData = [
  {
    title: 'Veterinarian',
    salary: 90000,
    user_id: 1
  },
  {
    title: 'Technician',
    salary: 30000,
    user_id: 2
  },
  {
    title: 'Groomer',
    salary: 32000,
    user_id: 3
  },
  {
    title: 'Kennel Staff',
    salary: 25000,
    user_id: 4
  },
  {
    title: 'Reception Staff',
    salary: 24000,
    user_id: 5
  },
  {
    title: 'Office Manager',
    salary: 37000,
    user_id: 6
  },
];


const seedStaff = () => Staff.bulkCreate(staffData);
module.exports = seedStaff;