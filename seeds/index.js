const seedPet = require('./pet-seeds');
const seedUser = require('./user-seeds');
const seedStaff = require('./staff-seeds');
const seedOwner = require('./owners-seeds');
// const seedDepartments = require('./departments-seeds');
// const seedImmunizations = require('./immunizations-seeds');
// const seedGrooming = require('./grooming-seeds');
// const seedBoarding = require('./boarding-seeds');

const sequelize = require('../config/connection');


 const seedAll = async () => {
  // clinic-side table seeds
  await sequelize.sync({ force: true });
  console.log('\n===== DATABASE SYNCED =====\n-');
  await seedPet();
  console.log('\n===== PETS SEEDED =====\n'); 
    await seedUser();
    console.log('\n===== USER SEEDED =====\n');
  await seedStaff();
  console.log('\n===== STAFF SEEDED =====\n');
  await seedOwner();
console.log('\n===== OWNER SEEDED =====\n');


// other seed tables here
  // await seedDepartments();
  // console.log('\n===== DEPARTMENTS SEEDED =====\n');
  // await seedImmunizations();
  // console.log('\n===== IMMUNIZATIONS SEEDED =====\n');
  // await seedGrooming();
  // console.log('\n===== GROOMING SEEDED =====\n');
  // await seedBoarding();
  // console.log('\n===== BOARDING SEEDED =====\n');

  process.exit(0);
};


seedAll();


