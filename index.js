const http = require('http');
const fs = require('fs');

const port = 4000;
const hostName = '127.0.0.1'

const server = http.createServer((req, res)=>{
    const handleWriteFile = (fileName, statusCode, req, res) =>{
        fs.readFile(fileName, 'utf-8', (err, data)=>{
            if(err){
                console.log(err);
            }else{
                res.writeHead(statusCode, {'Content-Type' : 'text/html'});
                res.write(data);
                res.end();
            }
        })
    }
    if(req.url === '/'){
        handleWriteFile('./views/home.html', 202, req, res)
    }else if(req.url === '/about'){
        handleWriteFile('./views/about.html', 202, req, res)
    }else if(req.url === '/contact'){
        handleWriteFile('./views/contact.html', 202, req, res)
    }else{
        handleWriteFile('./views/error.html', 404, req, res)
    }
});

server.listen(port, hostName, ()=>{
    console.log(`Server is running at http://${hostName}:${port}`);
})

