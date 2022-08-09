const { Pet } = require('../models');

const petData = [
    {
        name: 'Bing',
        type: 'Ooze',
        breed: 'Grey Ooze',
        age: '51',
        color: 'Grey',
        owner_id: '1'
    },
    {
        name: 'T-Bone',
        type: 'Beast',
        breed: 'Almiraj',
        age: '4',
        color: 'Tan',
        owner_id: '1'
    },
    {
        name: 'Candy',
        type: 'Elemental',
        breed: 'Dust Mephit',
        age: '54',
        color: 'Tan',
        owner_id: '2'
    },
    {
        name: 'Yank',
        type: 'Fey',
        breed: 'Blink Dog',
        age: '5',
        color: 'Tan',
        owner_id: '2'
    },
    {
        name: 'Hog',
        type: 'Beast',
        breed: 'Baboon',
        age: '6',
        color: 'Black',
        owner_id: '3'
    },
    {
        name: 'Toon',
        type: 'Undead',
        breed: 'Crawling Claw',
        age: '412',
        color: 'Grey',
        owner_id: '3'
    },
    {
        name: 'Wiz',
        type: 'Monstrosity',
        breed: 'Dreerie',
        age: '8',
        color: 'Blue',
        owner_id: '4'
    },
    {
        name: 'Indie',
        type: 'Monstrosity',
        breed: 'Bulette',
        age: '37',
        color: 'Grey',
        owner_id: '5'
    },
    {
        name: 'Daring',
        type: 'Fey',
        breed: 'Dandelion',
        age: '7',
        color: 'Green/Yellow',
        owner_id: '5'
    },
    {
        name: 'Storm',
        type: 'Elemental',
        breed: 'Phoenix',
        age: '2',
        color: 'Red/Orange',
        owner_id: '5'
    },
    {
        name: 'Dawg',
        type: 'Construct',
        breed: 'Kiddywidget',
        age: '9',
        color: 'Yellow',
        owner_id: '6'
    },
    {
        name: 'Bunny',
        type: 'Fey',
        breed: 'Boggle',
        age: '264',
        color: 'Grey',
        owner_id: '7'
    },
    {
        name: 'Jazzy',
        type: 'Undead',
        breed: 'Brain-in-a-Jar',
        age: '632',
        color: 'Grey',
        owner_id: '7'
    },
    {
        name: 'Growl',
        type: 'Elemental',
        breed: 'Air Elemental',
        age: '23',
        color: 'Tan',
        owner_id: '8'
    },
    {
        name: 'Titch',
        type: 'Aberration',
        breed: 'Sorrowfish',
        age: '62',
        color: 'White/Purple',
        owner_id: '8'
    },
    {
        name: 'Pipi',
        type: 'Aberration',
        breed: 'Flumph',
        age: '3',
        color: 'Green',
        owner_id: '8'
    },
    {
        name: 'Sticks',
        type: 'Beast',
        breed: 'Fox',
        age: '4',
        color: 'White',
        owner_id: '9'
    },
    {
        name: 'Speed',
        type: 'Plant',
        breed: 'Awakened Shrub',
        age: '923',
        color: 'Orange',
        owner_id: '10'
    },
    {
        name: 'Old Buck',
        type: 'Aberration',
        breed: 'Gazer',
        age: '163',
        color: 'Green/Yellow',
        owner_id: '10'
    },
    {
        name: 'Trey',
        type: 'Monstrosity',
        breed: 'Darkmantle',
        age: '77',
        color: 'Purple',
        owner_id: '11'
    },
    {
        name: 'Grim',
        type: 'Beast',
        breed: 'Cat',
        age: '6',
        color: 'Black/White',
        owner_id: '11'
    },
    {
        name: 'CooCoo',
        type: 'Fey',
        breed: 'Madcap',
        age: '194720',
        color: 'Red',
        owner_id: '12'
    },
    {
        name: 'Fortuna',
        type: 'Beast',
        breed: 'Octopus',
        age: '8',
        color: 'Blue',
        owner_id: '13'
    },
    {
        name: 'Cyclops',
        type: 'Monstrosity',
        breed: 'Zorbos',
        age: '6',
        color: 'Grey',
        owner_id: '13'
    },
    {
        name: 'Pug',
        type: 'Beast',
        breed: 'Weasel',
        age: '3',
        color: 'red',
        owner_id: '14'
    },
    {
        name: 'Creep',
        type: 'Beast',
        breed: 'Stirge',
        age: '2',
        color: 'Pink',
        owner_id: '19'
    },
    {
        name: 'Rose',
        type: 'Elemental',
        breed: 'Geonid',
        age: '14',
        color: 'Grey',
        owner_id: '15'
    },
    {
        name: 'Undertaker',
        type: 'Beast',
        breed: 'Owl',
        age: '8',
        color: 'White',
        owner_id: '16'
    },
    {
        name: 'Boomer',
        type: 'Fiend',
        breed: 'Vargouille',
        age: '17',
        color: 'Brown',
        owner_id: '17'
    },
    {
        name: 'Skip',
        type: 'Monstrosity',
        breed: 'Gremishka',
        age: '45',
        color: 'Grey',
        owner_id: '18'
    }
];

const seedPets = () => Pet.bulkCreate(petData);
module.exports = seedPets;