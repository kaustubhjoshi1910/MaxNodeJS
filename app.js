const http = require("http"); // importing the module of http

const routes=require('./routes');

const server = http.createServer(routes);


server.listen(3000); // listening to the server