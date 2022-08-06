// const seedStaff = require('./staff-seeds');
// const seedDepartments = require('./departments-seeds');
// const seedImmunizations = require('./immunizations-seeds');
// const seedGrooming = require('./grooming-seeds');
// const seedBoarding = require('./boarding-seeds');
const seedUser = require('./user-seeds');
// const seedPet = require('./pet-seeds')

const sequelize = require('../config/connection');

const seedAll = async () => {
  // clinic-side table seeds
  await sequelize.sync({ force: true });
  // console.log('\n===== DATABASE SYNCED =====\n-');
  // await seedStaff();
  // console.log('\n===== STAFF SEEDED =====\n');
  // await seedDepartments();
  // console.log('\n===== DEPARTMENTS SEEDED =====\n');
  // await seedImmunizations();
  // console.log('\n===== IMMUNIZATIONS SEEDED =====\n');
  // await seedGrooming();
  // console.log('\n===== GROOMING SEEDED =====\n');
  // await seedBoarding();
  // console.log('\n===== BOARDING SEEDED =====\n');
  await seedUser();
  console.log('\n===== User SEEDED =====\n');
  // await seedPet();
  // console.log('\n===== Pet SEEDED =====\n');
 // other seed tables here

  process.exit(0);
};

seedAll();