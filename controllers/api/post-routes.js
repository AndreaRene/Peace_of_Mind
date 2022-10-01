const router = require('express').Router();
const { Post } = require('../../models/');
const withAuth = require('../../utils/auth');

// POST new message
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

// PUT update message
router.put('/:id', withAuth, async (req, res) => {
    try {
        await Post.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).end();
    } catch (err) {
        res.status(500).json(err);
    }
});