const { User } = require('../models');

const userData = [
    {
        username: 'janitor_charlie',
        email: 'charlie@email.com',
        password: 'ratsrats'
    },
    {
        username: 'MUSCLEMAN77',
        email: 'mac@email.com',
        password: 'fightmilk'
    },
    {
        username: 'Dennis',
        email: 'dennis@email.com',
        password: 'pa$$w0rd'
    },
    {
        username: 'sweetdee',
        email: 'dee@email.com',
        password: 'notabird'
    },
    {
        username: 'frank_reynolds',
        email: 'frank@email.com',
        password: 'password'
    }
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;