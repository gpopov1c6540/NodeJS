const express = require('express');
const app = express();
const mongoose = require('mongoose');
//const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');
//Import Routes
const postsRoute = require('./routes/posts');

//Middlewares
app.use(cors());
app.use(express.json());
app.use('/posts',postsRoute);
//Routes
app.get('/', (req,res) => {
    res.send('We are on home')
})
//CONNECT TO DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => console.log('connected to DB!')
);

app.listen(3000);
