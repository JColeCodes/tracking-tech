const { Comment } = require('../models');

const commentData = [
    {
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas pretium bibendum. Orci varius natoque.',
        user_id: 2,
        post_id: 2
    },
    {
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida in velit.',
        user_id: 3,
        post_id: 1
    },,
    {
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis dolor eu felis fermentum tincidunt. Aenean lacinia lectus.',
        user_id: 1,
        post_id: 3
    },,
    {
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sagittis.',
        user_id: 1,
        post_id: 4
    },,
    {
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut diam iaculis, cursus mauris sed, ornare.',
        user_id: 5,
        post_id: 4
    },,
    {
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum consectetur dui vel.',
        user_id: 5,
        post_id: 2
    },,
    {
        comment: 'Lorem ipsum dolor sit amet, consectetur.',
        user_id: 2,
        post_id: 4
    },,
    {
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis est tortor, molestie in egestas facilisis, volutpat quis odio. Nulla ut dolor a felis maximus feugiat ut in turpis. Etiam a odio.',
        user_id: 3,
        post_id: 3
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;