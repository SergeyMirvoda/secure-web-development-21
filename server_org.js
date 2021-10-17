const http = require('http');
const fs = require('fs');
const url = require('url');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((rq, rs) => {
	
	let query = url.parse(rq.url, true);
	let data = query.query;
	let filename = query.pathname;
	let path = '.' + filename;
	
	
	if(filename === "/signin.html"){//Это страница проверки пароля
				
		if(data.name == data.pass){ //Вместо этого поищем пользователя в файле и проверим пароль
			rs.writeHead(200);
			rs.end('SUCCESS');
			return;
		}
		else{
			rs.writeHead(403);
			rs.end();
			return;
		}
	}
	
	fs.readFile(path, (err, data) => {
    if (err) {
		console.error(err);
		rs.writeHead(404);
		rs.end();
		return;
    }
    
	rs.statusCode = 200;
	rs.setHeader('Content-Type', 'text/html');
	rs.end(data);
	});
	
});

server.listen(port, hostname, ()=>{
	console.log(`server running at http://${hostname}:${port}`);
})
