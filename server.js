const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
var path = require('path');
var cors = require('cors');

var port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(cors());

app.use(
    bodyParser.urlencoded({
        extended: false
    })
)

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
}

app.use(cors(corsOptions));

// const mongouri = "mongodb://localhost:27017/systemDB";
const mongouri = "mongodb://0.0.0.0:27017/systemDB";
mongoose
    .connect(mongouri, { useNewUrlParser: true })
    .then(() => console.log('conected'))
    .catch(err => console.log(err))

var Users = require('./routes/Users');
app.use('/user', Users);
app.listen(port, () => {
    console.log("Server is lisning" + port);
})



