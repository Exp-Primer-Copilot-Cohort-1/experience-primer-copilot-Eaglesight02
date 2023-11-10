// Create web server
const express = require('express');
const app = express();

// Set up body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Set up CORS
const cors = require('cors');
app.use(cors());

// Set up mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/comment', {useNewUrlParser: true, useUnifiedTopology: true});

// Set up schema
const Schema = mongoose.Schema;
const commentSchema = new Schema({
    name: String,
    comment: String
});
const CommentModel = mongoose.model('comment', commentSchema);

// Set up API
app.get('/', (req, res) => {
    CommentModel.find({}, (err, comments) => {
        res.json(comments);
    });
});

app.post('/', (req, res) => {
    CommentModel.create({
        name: req.body.name,
        comment: req.body.comment
    }, () => {
        res.send('Comment added');
    });
});

// Set up port
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});