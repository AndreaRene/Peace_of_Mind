const router = require('express').Router();
const { User, Post, Comments } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [{
                model: User,
                attributes: ['user_name'],
            },
        ],
        });
        const posts = postData.map((post) => post.get({plain: true}));
        res.render('all-posts', {
            posts,
            logged_in: req.session.logged_in
        })
    } catch (error) {
        res.status(500).json(err.message);
    }
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
  
    res.render('login');
});
  
module.exports = router;