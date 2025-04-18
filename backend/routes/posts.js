const express = require('express')
const Post = require('../models/Post')
const Category = require('../models/Category')
const router = express.Router()

//Get all post
router.get('/', async(req,res) =>{
    try{
        const post = await Post.find()
        res.status(200).json(post)
    }
    catch(error){
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
})

//Get Single Post by ID
router.get('/:id', async(req, res) =>{
    try{
        const post = await Post.findById(req.params.id);
        if (!post){
            return res.status(404).json({
                message: "Post not found"
            })
        }
        res.status(200).json(post)
    }
    catch(error){
        res.status(500).json({
            message: "Internal server Error"
        })
    }
})

//Create a new post
router.post('/', async(req, res) =>{
    const post = new Post({
        title: req.body.title,
        content: req.body.content,
        category: req.body.category,
        author: req.body.author,
        image: req.body.image
    })

    try{
        const newPost = await post.save()
        res.status(201).json(newPost)
    }
    catch(error){
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
})

//update an exisiting post
router.put('/:id', async(req, res) =>{
    try{
        const post = await Post.findById(req.params.id);
        if (!post){
            return res.status(404).json({
                message: "Post not found"
            })
        }
        post.title = req.body.title || post.title
        post.content = req.body.content || post.content
        post.category = req.body.category || post.category
        post.author = req.body.author || post.author
        post.image = req.body.image || post.image
        post.updatedAt = Date.now()

        const updatedPost = await post.save()
        
        res.status(200).json(updatedPost)

    }
    catch(error){
        res.status(500).json({
            message: "Internal Server error"
        })
    }
})

//Delete the post
router.delete('/:id', async(req, res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if (!post){
            return res.status(404).json({
                message: "Post not found"
            })
        }

        await Post.findByIdAndDelete(post._id)
        res.status(200).json({
            message: "Successfully Post Deleted"
        })
    }
    catch(error){
        res.status(500).json({
            message: "Internal server error"
        })
    }
})

//Fetch posts by category ID
router.get('/category/:categoryId', async(req, res)=>{
    try {
        const categoryId = req.params.categoryId

        //validate category Id
        const categoryExists = await Category.findById(categoryId)

        if(!categoryExists){
            res.status(400).json({
                message: "Invalid Category ID"
            })
        }
        //Fetch posts
        const posts = await Post.find({category: categoryId}).populate('category')
        res.status(200).json(posts)
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        })
        
    }
})


module.exports = router