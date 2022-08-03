const { Grooming } = require('../models');

const groomingData = [
  {
    type: 'bath'
  },
  {
    type: 'dip'
  },
  {
    type: 'brushing'
  },
  {
    type: 'eye/ear cleaning'
  },
  {
    type: 'hair trim'
  },
  {
    type: 'nail/claw trim'
  },
  {
    type: 'teeth brushing'
  },
  {
    type: 'descaling'
  },
  {
    type: 'anal gland expression'
  },
  {
    type: 'dematting'
  },
];


const seedGrooming = () => Grooming.bulkCreate(groomingData);
module.exports = seedGrooming;