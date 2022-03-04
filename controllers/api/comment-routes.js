const router = require('express').Router();
const { Comment } = require('../../models');

// GET /api/comments
router.get('/', (req, res) => {
    Comment.findAll()
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => res.status(500).json(err));
});

// POST /api/comments
router.post('/', (req, res) => {
    Comment.create({
        comment: req.body.comment_body,
        post_id: req.body.post_id,
        user_id: req.session.user_id
    })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => res.status(500).json(err));
});

// DELETE /api/comments/1
router.put('/:id', (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.status(500).json(err));
});

module.exports = router;