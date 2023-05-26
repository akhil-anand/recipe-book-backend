const mongoose = require('mongoose')
const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const cors = require('cors');
app.use(cors())

require('./db')

const PORT = process.env.PORT || 5000;
const recipeController = require('./controllers/recipeController');

app.use(bodyParser.json())
app.use('/api', recipeController);
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
