const router = require('express').Router();
const { Comment } = require('../../models');

// GET /api/comments
router.get('/', (req, res) => {
    User.findAll()
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => res.status(500).json(err));
});

// POST /api/comments
router.post('/', (req, res) => {
    Comment.create({
        comment: req.body.comment,
        post_id: req.body.post_id,
        user_id: req.session.user_id
    })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => res.status(500).json(err));
});

module.exports = router;