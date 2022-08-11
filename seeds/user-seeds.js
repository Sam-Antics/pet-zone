const { User } = require('../models');

const userData = [
    {
        username: 'lappleglade',
        email: 'lappleglade@faewild.net',
        first_name: 'Lapis',
        last_name: 'Appleglade',
        password: 'password1234'
    },
    {
        username: 'nflattersky',
        email: 'nflattersky@faewild.net',
        first_name: 'Nelly',
        last_name: 'Flattersky',
        password: 'password1234'
    },
    {
        username: 'diasporh',
        email: 'diaspor.honeybite@faewild.net',
        first_name: 'Diaspor',
        last_name: 'Honeybite',
        password: 'password1234'
    },
    {
        username: 'ardiz',
        email: 'azindri@exandria.gov',
        first_name: 'Ardi',
        last_name: 'Zindri',
        password: 'password1234'
    },
    {
        username: 'unastrusa',
        email: 'unastrusa@exandria.gov',
        first_name: 'Unu',
        last_name: 'Strusa',
        password: 'password1234'
    },
    {
        username: 'mpamdug',
        email: 'millbe.pamdug@ggg.com',
        first_name: 'Millbe',
        last_name: 'Pamdug',
        password: 'password1234'
    },
    {
        username: 'hbeblees',
        email: 'hebeblees@adventure.com',
        first_name: 'Hekert',
        last_name: 'Beblees',
        password: 'password1234'
    },
    {
        username: 'fjords',
        email: 'fjords@mn.com',
        first_name: 'Fjord',
        last_name: 'Stone',
        password: 'password1234'
    },
    {
        username: 'yashanyd',
        email: 'yashanyd@mn.com',
        first_name: 'Yasha',
        last_name: 'Nydoorin',
        password: 'password1234'
    },
    {
        username: 'vaxvessar',
        email: 'dagger3@ravenqueen.org',
        first_name: "Vax'lidan",
        last_name: 'Vessar',
        password: 'password1234'
    },
    {
        username: 'cadclay',
        email: 'cadclay@mn.com',
        first_name: 'Caduceus',
        last_name: 'Clay',
        password: 'password1234'
    },
    {
        username: 'vethb',
        email: 'nottbrave@mn.com',
        first_name: 'Veth',
        last_name: 'Brenatto',
        password: 'password1234'
    },
    {
        username: 'dariaxz',
        email: 'dzaveon@exandria.com',
        first_name: 'Dariax',
        last_name: 'Zaveon',
        password: 'password1234'
    },
    {
        username: 'zalar',
        email: 'zalar@mythical.org',
        first_name: 'Zala',
        last_name: 'Rarku',
        password: 'password1234'
    },
    {
        username: 'thaudons',
        email: 'thaudons@cobaltsoul.org',
        first_name: 'Thaudon',
        last_name: 'Sadiset',
        password: 'password1234'
    },
    {
        username: 'ilyabek',
        email: 'ibektahor@mithril.com',
        first_name: 'Ilya',
        last_name: 'Bektahor',
        password: 'password1234'
    },
    {
        username: 'ceolaybe',
        email: 'tceolaybe@mithril.com',
        first_name: 'Theida',
        last_name: 'Ceolaybe',
        password: 'password1234'
    },
    {
        username: 'kvilarri',
        email: 'kvilarri@faewild.net',
        first_name: 'Klaia',
        last_name: 'Vilarri',
        password: 'password1234'
    },
    {
        username: 'orphnep',
        email: 'opolyxio@faewild.net',
        first_name: 'Orphne',
        last_name: 'Polyxio',
        password: 'password1234'
    },
    {
        username: 'clovaraw',
        email: 'cwilloris@faewild.net',
        first_name: 'Clovara',
        last_name: 'Willoris',
        password: 'password1234'
    },
    {
        username: 'kinarligw',
        email: 'kwhitaxe@mithril.com',
        first_name: 'Kinarlig',
        last_name: 'Whitaxe',
        password: 'password1234'
    },
    {
        username: 'brakdrotw',
        email: 'bwyvernfinger@mithril.com',
        first_name: 'Brakdrot',
        last_name: 'Wyvernfinger',
        password: 'password1234'
    },
    {
        username: 'whurmelaf',
        email: 'wflatfoot@ggg.com',
        first_name: 'Whurmela',
        last_name: 'Flatfoot',
        password: 'password1234'
    },
    {
        username: 'reisdrirej',
        email: 'rjademace@ggg.com',
        first_name: 'Reisdrire',
        last_name: 'Jademace',
        password: 'password1234'
    },
    {
        username: 'katrumr',
        email: 'kredchin@mithril.com',
        first_name: 'Katrum',
        last_name: 'Redchin',
        password: 'password1234'
    },

]

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});
module.exports = seedUsers;