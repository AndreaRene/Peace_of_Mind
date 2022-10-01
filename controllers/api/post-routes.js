const router = require('express').Router();
const { Post } = require('../../models/');
const withAuth = require('../../utils/auth');

// POST new blog post
router.post('/', withAuth, async (req, res) => {
    const body = req.body;
    try {
        const newPost = await Post.create({
            ...body,
            user_id: req.session.user_id
        });
        res.json(newPost);
    } catch (err) {
        res.status(500).json(err);
    }
});