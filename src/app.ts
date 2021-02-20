/* eslint-disable @typescript-eslint/no-unused-vars */
// import * as fs from 'fs';
// fs.writeFileSync('_hello.txt', 'hello from node.js!');

import * as http from 'http';
import requestHandler from './routes';

console.log(requestHandler);
const server = http.createServer(requestHandler);

server.listen(3000);
