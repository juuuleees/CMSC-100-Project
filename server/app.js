/*
	
	Next four lines are for express functions, finding directories, 
	initializing the server, and setting the port.

*/
var express = require('express');	
var path = require('path');
var app = express();
var cors = require('cors');
let port = 3000;

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const UserRouter = require('./routes/user-router');
const PostRouter = require('./routes/post-router');

app.use('/user', UserRouter);
app.use('/post', PostRouter);

app.listen(port, () => {
	console.log("Server running on port ", port);
})