// implement your posts router here
const express = require('express');
const router = express.Router();

const Post = require('./posts-model');

router
    .get('/', (req,res) => {
        // api/posts
        Post.find()
            .then(posts => {
                console.log(posts)
                res.status(200).json(posts)
            })
            .catch(err => {
                res.status(500).json({ message: err.message })
            })
    })

    module.exports = router