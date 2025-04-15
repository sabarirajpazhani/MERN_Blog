const express = require('express')
const router = express.Router()
const Category = require('../models/Category')

//Get all categories
router.get('/', async(req, res)=>{
    try{
        const categories = await Category.find()
        res.status(201).json(categories)
    }
    catch(error){
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
})

//Get Single category by ID
router.get('/:id', async(req, res) =>{
    try{
        const category = await Category.findById(req.params.id);
        if (!category){
            return res.status(404).json({
                message: "Category not found"
            })
        }
        res.status(200).json(category)
    }
    catch(error){
        res.status(500).json({
            message: "Internal server Error"
        })
    }
})

//Create a new category
router.post('/', async(req, res) =>{
    const category = new Category({
       name: req.body.name,
       slug: req.body.slug,
       description: req.body.description
    })

    try{
        const newCategory = await category.save()
        res.status(201).json(newCategory)
    }
    catch(error){
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
})


//update an exisiting category
router.put('/:id', async(req, res) =>{
    try{
        const category = await Category.findById(req.params.id);
        if (!category){
            return res.status(404).json({
                message: "Category not found"
            })
        }
        category.name = req.body.name || category.name,
        category.slug = req.body.slug || category.slug,
        category.description = req.body.description || category.description,
        category.updatedAt = Date.now()

        const updatedCategory = await category.save()
        
        res.status(200).json(updatedCategory)

    }
    catch(error){
        res.status(500).json({
            message: "Internal Server error"
        })
    }
})

//Delete the category
router.delete('/:id', async(req, res)=>{
    try{
        const category = await Category.findById(req.params.id);
        if (!category){
            return res.status(404).json({
                message: "Category not found"
            })
        }

        await Category.findByIdAndDelete(post._id)
        res.status(200).json({
            message: "Successfully Category Deleted"
        })
    }
    catch(error){
        res.status(500).json({
            message: "Internal server error"
        })
    }
})


module.exports = router