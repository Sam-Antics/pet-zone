const { Boarding } = require('../models');

const boardingData = [
  {
    start_date: 2022-10-15,
    end_date: 2022-10-22,
    special_diet: 'gets wet food in the morning',
    notes: '',
    pet_id: 5
  },
  {
    start_date: 2022-8-03,
    end_date: 2022-8-17,
    special_diet: 'requires fish oil drops on food am/pm',
    notes: 'Will only go outside with his brother',
    pet_id: 19
  },
  {
    start_date: 2022-8-03,
    end_date: 2022-8-17,
    special_diet: 'Will only eat wet food',
    notes: 'Will only go outside with brother',
    pet_id: 20
  },
  {
    start_date: 2022-09-18,
    end_date: 2022-10-02,
    special_diet: 'N/A',
    notes: 'Beware: likes to nip fingers.',
    pet_id: 32
  },
];


const seedBoarding = () => Boarding.bulkCreate(boardingData);
module.exports = seedBoarding;