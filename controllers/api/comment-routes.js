const router = require('express').Router();
const { Comment } = require('../../models/');
const withAuth = require('../../utils/auth');

// GET comments
router.get('/', withAuth, async (req, res) => {
    try {
        const commentText = await Comment.findAll({
            include: [User],
        });
        const comments = commentText.map((comment) => comment.get({ plain: true }));
        res.render('single-post', {
            comments,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// POST new comment
router.post('/', withAuth, async (req, res) => {
    const body = req.body;
    try {
        const newComment = await Comment.create({
            ...body,
            user_id: req.session.user_id,
        });
        res.json(newComment);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;