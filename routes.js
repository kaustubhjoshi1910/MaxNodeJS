const fs = require('fs');

const requestHandler = (req, res) => {

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
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile("message.txt", message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }


    res.setHeader('content-type', 'text/html');
    res.write("<html>");
    res.write("<head><title>Starting Node JS</title></head>");
    res.write("<body><h1>Response from the Server....</h1></body>");
    res.write("</html>");
    res.end();
    // req.headers,req.url,req.method ---Important ones
    // process.exit() --- To exit the node server after giving just one request 
}
// createServer using two arguments that are request and respond
module.exports = requestHandler;