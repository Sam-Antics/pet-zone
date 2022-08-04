const { Pet } = require('../models');

const petData = [
    {
        name: 'Bing',
        type: 'Ooze',
        breed: 'Grey Ooze',
        age: '51',
        color: 'Grey',
        owner_id: ''
    },
    {
        name: 'T-Bone',
        type: 'Beast',
        breed: 'Almiraj',
        age: '4',
        color: 'Tan',
        owner_id: ''
    },
    {
        name: 'Candy',
        type: 'Elemental',
        breed: 'Dust Mephit',
        age: '54',
        color: 'Tan',
        owner_id: ''
    },
    {
        name: 'Yank',
        type: 'Fey',
        breed: 'Blink Dog',
        age: '5',
        color: 'Tan',
        owner_id: ''
    },
    {
        name: 'Hog',
        type: 'Beast',
        breed: 'Baboon',
        age: '6',
        color: 'Black',
        owner_id: ''
    },
    {
        name: 'Toon',
        type: 'Undead',
        breed: 'Crawling Claw',
        age: '412',
        color: 'Grey',
        owner_id: ''
    },
    {
        name: 'Wiz',
        type: 'Monstrosity',
        breed: 'Dreerie',
        age: '8',
        color: 'Blue',
        owner_id: ''
    },
    {
        name: 'Indie',
        type: 'Monstrosity',
        breed: 'Bulette',
        age: '37',
        color: 'Grey',
        owner_id: ''
    },
    {
        name: 'Daring',
        type: 'Fey',
        breed: 'Dandelion',
        age: '7',
        color: 'Green/Yellow',
        owner_id: ''
    },
    {
        name: 'Storm',
        type: 'Elemental',
        breed: 'Phoenix',
        age: '2',
        color: 'Red/Orange',
        owner_id: ''
    },
    {
        name: 'Dawg',
        type: 'Construct',
        breed: 'Kiddywidget',
        age: '9',
        color: 'Yellow',
        owner_id: ''
    },
    {
        name: 'Bunny',
        type: 'Fey',
        breed: 'Boggle',
        age: '264',
        color: 'Grey',
        owner_id: ''
    },
    {
        name: 'Jazzy',
        type: 'Undead',
        breed: 'Brain-in-a-Jar',
        age: '632',
        color: 'Grey',
        owner_id: ''
    },
    {
        name: 'Growl',
        type: 'Elemental',
        breed: 'Air Elemental',
        age: '23',
        color: 'Tan',
        owner_id: ''
    },
    {
        name: 'Titch',
        type: 'Aberration',
        breed: 'Sorrowfish',
        age: '62',
        color: 'White/Purple',
        owner_id: ''
    },
    {
        name: 'Pipi',
        type: 'Aberration',
        breed: 'Flumph',
        age: '3',
        color: 'Green',
        owner_id: ''
    },
    {
        name: 'Sticks',
        type: 'Beast',
        breed: 'Fox',
        age: '4',
        color: 'White',
        owner_id: ''
    },
    {
        name: 'Speed',
        type: 'Plant',
        breed: 'Awakened Shrub',
        age: '923',
        color: 'Orange',
        owner_id: ''
    },
    {
        name: 'Old Buck',
        type: 'Aberration',
        breed: 'Gazer',
        age: '163',
        color: 'Green/Yellow',
        owner_id: ''
    },
    {
        name: 'Trey',
        type: 'Monstrosity',
        breed: 'Darkmantle',
        age: '77',
        color: 'Purple',
        owner_id: ''
    },
    {
        name: 'Grim',
        type: 'Beast',
        breed: 'Cat',
        age: '6',
        color: 'Black/White',
        owner_id: ''
    },
    {
        name: 'CooCoo',
        type: 'Fey',
        breed: 'Madcap',
        age: '194720',
        color: 'Red',
        owner_id: ''
    },
    {
        name: 'Fortuna',
        type: 'Beast',
        breed: 'Octopus',
        age: '8',
        color: 'Blue',
        owner_id: ''
    },
    {
        name: 'Cyclops',
        type: 'Monstrosity',
        breed: 'Zorbos',
        age: '6',
        color: 'Grey',
        owner_id: ''
    },
    {
        name: 'Pug',
        type: 'Beast',
        breed: 'Weasel',
        age: 'Red',
        color: '3',
        owner_id: ''
    },
    {
        name: 'Creep',
        type: 'Beast',
        breed: 'Stirge',
        age: '2',
        color: 'Pink',
        owner_id: ''
    },
    {
        name: 'Rose',
        type: 'Elemental',
        breed: 'Geonid',
        age: '14',
        color: 'Grey',
        owner_id: ''
    },
    {
        name: 'Undertaker',
        type: 'Beast',
        breed: 'Owl',
        age: '8',
        color: 'White',
        owner_id: ''
    },
    {
        name: 'Boomer',
        type: 'Fiend',
        breed: 'Vargouille',
        age: '17',
        color: 'Brown',
        owner_id: ''
    },
    {
        name: 'Skip',
        type: 'Monstrosity',
        breed: 'Gremishka',
        age: '45',
        color: 'Grey',
        owner_id: ''
    }
];

const seedPets = () => Pet.bulkCreate(petData);
module.exports = seedPets;