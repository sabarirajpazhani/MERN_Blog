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

