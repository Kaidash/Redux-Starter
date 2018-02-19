// use node style for this

require('babel-polyfill');

const server = require('../server/main').default;
const debug = require('debug')('app:bin:dev-server');

server.listen(3000);
debug(`Server is now running at http://localhost:3000.`);
