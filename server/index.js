const path = require('path');
const express = require('express');

const cors = require('cors');

const qandaRouter = require(path.join(__dirname, '/routes/qanda-router'));

const app = express();
const apiPort = 3000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	const messeage = 'Hi, from server \'localhost:' + apiPort + '/\'';
	console.log(messeage);
	res.send(messeage);
});

app.use('/api', qandaRouter);

app.listen(apiPort, () => console.log('Server running on port', apiPort));
