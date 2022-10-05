const router = require('express').Router();
const { Post, User } = require('../../models');
const withAuth = require('../../utils/auth');

// GET all posts by user id
router.get('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: { "user_id": req.session.user_id },
            include: [User]
        });
        const posts = postData.map((post) => post.get({ plain: true }));
        res.render('dashboard', {
            loggedIn: req.session.loggedIn,
            posts,
        });
    } catch (err) {
        res.redirect('login');
    }
});

// GET new-post page
router.get('/new', withAuth, (req, res) => {
    res.render('new-post', {
        loggedIn: req.session.loggedIn,
    });
});

//GET edit post page
router.get('/edit/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id);
        if (postData.user_id == req.session.user_id) {
            const post = postData.get({ plain: true });
            console.log(post);
            res.render('edit-post', {
                post,
            });
        } else {
            res.redirect('/')
        }
    } catch (err) {
        res.redirect('/');
    }
});

module.exports = router;