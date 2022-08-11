const { Staff } = require('../models');

const staffData = [
  {
    title: 'Veterinarian',
    salary: 90000,
    staff_email: 'lappleglade@staff.net',
    password: 'staff1234',
    user_id: 1
  },
  {
    title: 'Technician',
    salary: 30000,
    staff_email: 'nflattersky@staff.net',
    password: 'staff1234',
    user_id: 2
  },
  {
    title: 'Groomer',
    salary: 32000,
    staff_email: 'diaspor.honeybite@staff.net',
    password: 'staff1234',
    user_id: 3
  },
  {
    title: 'Kennel Staff',
    salary: 25000,
    staff_email: 'azindri@staff.gov',
    password: 'staff1234',
    user_id: 4
  },
  {
    title: 'Reception Staff',
    salary: 24000,
    staff_email: 'unastrusa@staff.gov',
    password: 'staff1234',
    user_id: 5
  },
  {
    title: 'Office Manager',
    salary: 37000,
    staff_email: 'staff',
    password: 'staff1234',
    user_id: 6
  },
];


const seedStaff = () => Staff.bulkCreate(staffData);
module.exports = seedStaff;