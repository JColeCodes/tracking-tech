const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

// GET /api/posts
router.get('/', (req, res) => {
    Post.findAll({
        attributes: ['id', 'title', 'content', 'created_at'],
        order: [['created_at', 'DESC']],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => res.status(500).json(err));
});

// GET /api/posts/id
router.get('/:id', (req, res) => {
    User.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'title', 'content', 'created_at'],
        order: [['created_at', 'DESC']],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'There is no post with this id' });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => res.status(500).json(err));
});

// POST /posts/users
router.post('/', (req, res) => {
    User.create({
        title: req.body.title,
        content: req.body.content,
        user_id: req.session.user_id
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => res.status(500).json(err));
});

module.exports = router;