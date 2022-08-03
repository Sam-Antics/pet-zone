const { Immunization } = require('../models');

const immunizationData = [
  {
    type: 'DHPP1',
    description: 'Canine Distemper (1st), Adenovirus (Type 1 & 2), Parainfluenza, Parvovirus'
  },
  {
    type: 'DHPP2',
    description: 'Canine Distemper (2nd)'
  },
  {
    type: 'DHPP3',
    description: 'Canine Distemper (3rd)'
  },
  {
    type: 'DHPP4',
    description: 'Canine Distemper (4th)'
  },
  {
    type: 'DHPP-B',
    description: 'Canine Distemper (Booster)'
  },
  {
    type: 'BORDO',
    description: 'Bordetella (Oral)'
  },
  {
    type: 'LEPTO/LYME 1',
    description: 'Leptospirosis (1st)'
  },
  {
    type: 'LEPTO/LYME 2',
    description: 'Leptospirosis (2nd)'
  },
  {
    type: 'LEPTO/LYME-B',
    description: 'Leptospirosis (Booster)'
  },
  {
    type: 'INF',
    description: 'Bivalent Influenza Vaccine'
  },
  {
    type: 'HRTW',
    description: 'ProHeart Injection (Heartworm Prevention)'
  },
  {
    type: 'WORM-P',
    description: 'Dewormer (Puppy)'
  },
  {
    type: 'RAB',
    description: 'Rabies'
  },
  {
    type: 'FVRCP1',
    description: 'Feline Distemper (1st), Rhinotracheitis, Calicivirus, Panleukopenia'
  },
  {
    type: 'FVRCP2',
    description: 'Feline Distemper (2nd)'
  },
  {
    type: 'FVRCP3',
    description: 'Feline Distemper (3rd)'
  },
  {
    type: 'FVRCP4',
    description: 'Feline Distemper (4th)'
  },
  {
    type: 'FVRCP-B',
    description: 'Feline Distemper (Booster)'
  },
  {
    type: 'FVRCP2',
    description: 'Feline Distemper (2nd))'
  },
  {
    type: 'FELV1',
    description: 'Feline Leukemia (1st)'
  },{
    type: 'FELV-B',
    description: 'Feline Leukemia (Booster)'
  },
  {
    type: 'WORM-K',
    description: 'Dewormer (Kitten)'
  },
  {
    type: 'FLEA/TICK',
    description: 'Flea and Tick Prevention'
  },
  {
    type: 'DRPX',
    description: 'Dragon Pox'
  },
  {
    type: 'BDFR',
    description: 'Bloodfire'
  },
  {
    type: 'FLEA/TICK',
    description: 'Flea and Tick Prevention'
  },
  {
    type: 'XVR',
    description: 'Xenovirus'
  },
  {
    type: 'BSV',
    description: 'Blue Shadow Virus'
  },
];


const seedImmunizations = () => Immunization.bulkCreate(immunizationData);
module.exports = seedImmunizations;