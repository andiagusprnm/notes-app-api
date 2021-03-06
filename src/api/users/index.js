const UsersHandler = require('./handler');
const routes = require('./routes');
const users = {
  name: 'users',
  version: '1.0.0',
  register: async (server, { service, validator }) => {
    const userHandler = new UsersHandler(service, validator);
    server.route(routes(userHandler));
  }
}

module.exports = users;