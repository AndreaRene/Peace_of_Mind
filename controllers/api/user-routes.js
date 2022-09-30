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

router.post('/login', async (req, res) => {
    try {
        const validPW = user.checkPassword(req.body.password);
        const user = await User.findOne({
            where: {
                user_name: req.body.user_name,
            },
        });
        if (!user || !validPW) {
            res.status(400).json({ message: 'Username or password incorrect.' });
            return;
        };
        req.session.save(() => {
            req.session.user_id = user.id;
            req.session.user_name = user.user_name;
            req.session.loggedIn = true;

            res.json({ user, message: 'Login successful.' });
        });
    } catch (err) {
        res.status(400).json({ message: 'Invalid username or password' });
    };
});