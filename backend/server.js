const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
mongoose.set('useFindAndModify', false);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfuly");
})

const trackingRouter = require('./routes/tracking');
const usersRouter = require('./routes/users');

app.use('/tracking', trackingRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});