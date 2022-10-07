const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

// get all posts
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [{
                model: User,
                attributes: ['user_name'],
            },
            ],
        });
        const posts = postData.map((post) => post.get({ plain: true }));
        res.render('all-posts', {
            posts,
            logged_in: req.session.logged_in
        })
    } catch (error) {
        res.status(500).json(err.message);
    }
});

// get post by id with comments
router.get('/posts/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [{
                model: User,
                attributes: { exclude: ['password'] }
            },
            {
                model: Comment,
                include: {
                    model: User,
                    attributes: { exclude: ['password'] }
                }
            },
            ],
        });
        const commentText = await Comment.findAll({
            where: {
                post_id: req.params.id
            },
            include: [{
                model: User,
                attributes: { exclude: ['password'] }
            }
            ],
        });
        const comments = commentText.map((comment) => comment.get({ plain: true }));
        const post = postData.get({ plain: true });
        res.render('single-post', {
            comments,
            post,
            logged_in: req.session.logged_in
        })
    } catch (error) {
        res.status(500).json(error.message);
    }
});

// get login sign up page

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

module.exports = router;