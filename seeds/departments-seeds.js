const { Department } = require('../models');

const departmentData = [
  {
    name: 'Clinic',
  },
  {
    name: 'Front Office',
  },
  {
    name: 'Kennel',
  },
];


const seedDepartments = () => Department.bulkCreate(departmentData);
module.exports = seedDepartments;