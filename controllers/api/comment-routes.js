const router = require('express').Router();
const { Comment } = require('../../models/');
const withAuth = require('../../utils/auth');

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