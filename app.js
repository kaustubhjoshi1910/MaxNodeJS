const http = require("http"); // importing the module of http

const server = http.createServer((req,res)=>{ // createServer using two arguments that are request and respond
    console.log(req);
});

server.listen(3000); // listening to the server