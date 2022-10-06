
const { User } = require('../models');

const userdata =

    [
        {
            "user_name": "Happy Breeze",
            "password": "password"
        },
        {
            "user_name": "Bouncing Cloud",
            "password": "password"
        },
        {
            "user_name": "Flittering Giraffe",
            "password": "password"
        }
    ];

const seedUser = () => User.bulkCreate(userdata,
    {
        individualHooks: true,
        returning: true,
    });

module.exports = seedUser;