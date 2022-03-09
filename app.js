'use strict';
const express = require('express');
const app = express();
const Comments = require('./db/model/Comments');

const cors = require('cors');
var corsConfig = {
	origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
	methods: ['POST'],
	optionsSuccessStatus: 200,
};

const bodyParser = require('body-parser');
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

app.use(bodyParser.json());

/* -------------------------------------------------------------------------- */

app.options('*', function (req, res) {
	res.header('Access-Control-Allow-Origin', req.get('Origin') || '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	res.status(200).end();
});

app.post('/comments', cors(corsConfig), async (req, res) => {
	try {
		const comment = await Comments.create({
			firstname: req.body.firstname,
			surname: req.body.surname,
			email: req.body.email,
			telephone: req.body.telephone,
			gender: req.body.gender,
			dob: req.body.dob,
			comments: req.body.comments,
		});
		res.status(201).json(comment);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// curl -X POST -H "Content-Type: application/json" -d '{"firstname":"daniel", "surname":"lo", "email": "ppooi27@gmail.com", "telephone": "12345678", "gender": "M", "dob": "2021-10-29", "comments": "commmmmmmmmmentttt"}' http://127.0.0.1:3000/comments

/* -------------------------------------------------------------------------- */

const PORT = process.env.PORT || 8000;
app.listen(PORT, (err) => {
	if (err) {
		console.error('got something error!');
	}
	console.log('Express server started... ', 'http://127.0.0.1:' + PORT);
});
