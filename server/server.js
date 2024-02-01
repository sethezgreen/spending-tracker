const express = require('express');
const cors = require('cors') // allows cross origin requests

const app = express();
app.use(cors())
app.use(express.json()) // allows JSON objects to be posted
app.use(express.urlencoded({extended:true})) // allows JSON objects with strings and arrays

require('./config/mongoose.config')
require('./routes/month.routes')(app)
const port = 8000;
    
app.listen(port, () => console.log(`Listening on port: ${port}`) );