process.on('unhandledRejection', error => null);

const {PORT = 1337} = process.env;
const app = require('express')();
const cors = require('cors');
const fetch = require('node-fetch');
const {name, version} = require('./package.json');

app.get('/ping', cors(), async({query: {url}}, response, next) => {
	if (!url) {
		response.sendStatus(204);
	} else {
		try {
			const result = await fetch(url);
			response.sendStatus(result.status);
		} catch (error) {
			response.sendStatus(error.constructor.name === 'FetchError' ? 404 : 500);
		}
	}
	next();
});

app.get('*', (request, response) => response.headersSent || response.sendStatus(204));

app.listen(PORT);
