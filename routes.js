const server = require('./server');
const resouces = require('./resouces');

// Lists

server.get('/lists', resouces.lists.list);
server.put('/lists/:list', resouces.lists.create);
server.del('/lists/:list', resouces.lists.del);

// Items

server.get('/lists/:list/items', resouces.items.list);
server.post('/lists/:list/items', resouces.items.create);
server.del('/lists/:list/items/:item', resouces.items.del);
