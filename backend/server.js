const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//Mongodb URI
const uri = process.env.MONGO_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true });

//Connecting to DB
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

//Requiring our Routes
const articlesRouter = require('./routes/articles');
const teamRouter = require('./routes/team');
const adminRouter = require('./routes/admin');

//Routes usage
app.use('/articles', articlesRouter);
app.use('/team', teamRouter);
app.use('/admin', adminRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

