var http = require('http');
var url = require('url');
var querystring = require('querystring'); 

var server = http.createServer(function(request,response){
    console.log('--- log start ---');
    var parsedUrl = url.parse(request.url);
    console.log(parsedUrl);
    var parsedQuery = querystring.parse(parsedUrl.query,'&','=');
    console.log(parsedQuery);
    console.log('--- log end ---');

    var result1 = parsedQuery.var1;
    var result2 = parsedQuery.var2;
    var result3 = parsedQuery.var3;

    response.writeHead(200, {'Content-Type':'text/plain;charset=utf-8'});
    response.end('전달된 var1:'+parsedQuery.var1+'전달된 var2:'+parsedQuery.var2+'전달된 var3:'+parsedQuery.var3);
});

server.listen(8080, function(){
    console.log('Server is running...');
});