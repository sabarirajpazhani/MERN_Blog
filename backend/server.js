const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()
const PORT = process.env.PORT || 8000

//Middleware
app.use(bodyParser.json())

//Connec to MongoDB
mongoose.connect('mongodb://localhost:27017/blog')
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log('DB Error', err))

app.listen(PORT, ()=>console.log(`Server running on Port ${PORT}`))
