const { Staff } = require('../models');

const staffData = [
  {
    title: 'Veterinarian'
  },
  {
    title: 'Technician'
  },
  {
    title: 'Groomer'
  },
  {
    title: 'Kennel Staff'
  },
  {
    title: 'Reception Staff'
  },
  {
    title: 'Office Manager'
  },
];


const seedStaff = () => Staff.bulkCreate(staffData);
module.exports = seedStaff;