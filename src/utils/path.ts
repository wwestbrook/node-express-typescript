import path from 'path';

const req = require.main;
let rootDir: string;

if (req) {
	rootDir = req.filename;
} else {
	rootDir = __dirname;
}

export default path.join(path.dirname(rootDir), '..');
