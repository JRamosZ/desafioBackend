const express = require('express')
const { list, get } = require('../usecases/post.usecase')

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const posts = await list()
        res.json({
            success: true,
            data: posts
        })
    } catch(err){
        res.status(err.status || 500).json({
            success: false,
            message: err.message
        })
    }
})

router.get('/:id', async(req, res) => {
    try{
        const post = await get(req.params.id)
        res.json({
            success: true,
            data: post
        })
    } catch(err){
        res.status(err.status || 500).json({
            success: false,
            message: err.message
        })
    }
})

module.exports = router