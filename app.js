const http = require('http');
const fs = require('fs');

const port = 3000;
const hostname = '192.168.1.12';

fs.readFile('index.html',(err, html) =>{
	if(err){
		throw err;
	}
	const server = http.createServer((req, res) =>{
		res.statusCode = 200;
		res.setHeader('Content-type','text/html');
		res.write(html);
		res.end();
	});
	server.listen(port, hostname, ()=>{
		console.log("The server started on port"+ port);
	});
});
