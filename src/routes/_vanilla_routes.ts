import * as fs from 'fs';
import * as http from 'http';

// eslint-disable-next-line max-len
const requestHandler = (req: http.IncomingMessage, res: http.ServerResponse): void | http.IncomingMessage => {
	const {url, method} = req;
	if (url === '/') {
		res.write('<html>');
		res.write('<head><title>Input Page</title></head>');
		res.write(
			// eslint-disable-next-line max-len
			'<body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">Submit</button></form></body>'
		);
		res.write('</html>');
		return res.end();
	}

	const body: Uint8Array[] = [];
	if (url === '/message' && method === 'POST') {
		req.on('data', (chunk) => {
			// console.log(chunk);
			body.push(chunk);
		});
		return req.on('end', () => {
			const parsedBody = Buffer.concat(body).toString();
			fs.writeFile('_message.txt', parsedBody.split('=')[1], (error) => {
				if (error) {
					console.log(error);
					return;
				}

				res.statusCode = 302;
				res.setHeader('Location', '/');
				res.end();
			});
		});
	}

	res.setHeader('Content-Type', 'text/html');
	res.write('<html>');
	res.write('<head><title>First Node Page</title></head>');
	res.write('<body><h1>Hello from my node app!!</h1></body>');
	res.write('</html>');
	return res.end();
};

export default requestHandler;
