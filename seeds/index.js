const seedStaff = require('./staff-seeds');
const seedDepartments = require('./departments-seeds');
const seedImmunizations = require('./immunizations-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n===== DATABASE SYNCED =====\n-');
  await seedStaff();
  console.log('\n===== STAFF SEEDED =====\n');
  await seedDepartments();
  console.log('\n===== DEPARTMENTS SEEDED =====\n');
  await seedImmunizations();
  console.log('\n===== IMMUNIZATIONS SEEDED =====\n')
 // other seed tables here

  process.exit(0);
};

seedAll();