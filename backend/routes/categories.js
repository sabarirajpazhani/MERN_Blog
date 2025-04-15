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