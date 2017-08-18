var http = require('http');
var fs = require('fs');
var path = require("path");

//var file = fs.readdirSync('./images/');
//console.log(file);

http.createServer(function(req, res){

    console.log(`${req.method} request for ${req.url}`);

    if(req.url === "/"){

        fs.readFile("./index.html","UTF-8",function(err,html){
            res.writeHead(200,{"Content-Type":"text/html"});
            res.end(html);
        });

    } else if (req.url.match(/.css$/)){

        var cssPath = path.join(__dirname, req.url);
        var fileStream = fs.createReadStream(cssPath, "UTF-8");

        res.writeHead(200, {"Content-Type":"text/css"});
        fileStream.pipe(res);

    } else if(req.url.match(/.ttf$/)) {

        var fpath = path.join(__dirname, req.url);
        var fileStream = fs.createReadStream(fpath, "UTF-8");

        res.writeHead(200, {"Content-Type":"application/x-font-ttf"});
        fileStream.pipe(res);
    } else if(req.url.match(/.woff2$/) || (req.url.match(/.woff$/))){

        var fpath = path.join(__dirname, req.url);
        var fileStream = fs.createReadStream(fpath, "UTF-8");

        res.writeHead(200, {"Content-Type":"application/x-font-ttf"});
        fileStream.pipe(res);
        
    } else if(req.url.match(/.js$/)) {
         var jsPath = path.join(__dirname, req.url);
         var fileStream = fs.createReadStream(jsPath, "UTF-8");

         res.writeHead(200, {"Content-Type": "text/javascript"});
         fileStream.pipe(res);

    } else if (req.url.match(/.base.css$/)){

        var foldername = '/jqwidgets/styles/';
        var cssPath = path.join(__dirname,foldername, req.url);
        var fileStream = fs.createReadStream(cssPath, "UTF-8");

        res.writeHead(200, {"Content-Type":"text/css"});
        fileStream.pipe(res);

    }else{
        res.writeHead(404,{"Content-Type":"text/plain"});
        res.end("404. Page not found");
    }


}).listen(3000);

console.log("Server listening on port 3000");