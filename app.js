const http = require("http"); // importing the module of http
const fs = require("fs");

const server = http.createServer((req, res) => { // createServer using two arguments that are request and respond
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write("<html>");
        res.write("<head><title>Enter message</title></head>")
        res.write("<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>");
        res.write("</html>");
        return res.end();

    }

    if (url === '/message' && method === 'POST') {
        fs.writeFileSync("message.txt","DUMMY");
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }


    res.setHeader('content-type', 'text/html');
    res.write("<html>");
    res.write("<head><title>Starting Node JS</title></head>");
    res.write("<body><h1>Response from the Server.</h1></body>");
    res.write("</html>");
    res.end();
    // req.headers,req.url,req.method ---Important ones
    // process.exit() --- To exit the node server after giving just one request 
});

server.listen(3000); // listening to the server