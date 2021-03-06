const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const items = require('./routes/api/item')

const app = express()

// bodyParser middleware
app.use(bodyParser.json())

// DB config
const db = require('./config/keys').mongoURI

// Connect mongo
mongoose
  .connect(db)
  .then(() => console.log('mongodb connected'))
  .catch(err => console.log(err))

// Use routes
app.use('/api/items', items)

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`server started on port ${port}`))
