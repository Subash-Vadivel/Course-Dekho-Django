var http=require("http");
var url=require('url');
let server = http.createServer((request, response) => {
    response.writeHead(200,{"content-type":"text/html"});
    if(request.url === '/' || request.url === '/index.html') {
      response.end('<a href="index.html">Hello</a>');
    } 
    else {
      response.end('<h1>404 Not Found</h1>');
    }
  }).listen(8000);
  console.log("Server Running");
