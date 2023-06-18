// Question7.In this challenge, you are required to use Node1js and the built-in HTTP module to create a server that displays the text "I Am Happy To Learn Full Stack Web Development From PW Skills!" on the browser screen. The goal is to utilize the HTTP module to create an HTTP server, set the port, appropriate content type, and send the message as a response to the client's request, allowing it to display on the browser.

const http = require('http');

const message = "I Am Happy To Learn Full Stack Web Development From PW Skills!";
const server= http.createServer((req,res)=>{
    res.write(message);
    res.end();
});
server.listen(5003);