const router = require('express').Router();
const { User } = require('../../models/');

router.post('/', async (req, res) => {
    try {
        const newUser = await User.create({
            user_name: req.body.user_name,
            password: req.body.password
        });

        req.session.save(() => {
            req.session.user_id = newUser.id;
            req.session.user_name = newUser.user_name;
            req.session.loggedIn = true;

            res.json(newUser);
        });
    } catch (err) {
        res.status(500).json(err.message);
    };
});