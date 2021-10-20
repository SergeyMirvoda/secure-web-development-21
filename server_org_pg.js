const http = require('http');
const fs = require('fs');
const url = require('url');

const hostname = '127.0.0.1';
const port = 8080;

const { Client } = require('pg');


const server = http.createServer((rq, rs) => {
	
	let query = url.parse(rq.url, true);
	let data = query.query;
	let filename = query.pathname;
	let path = '.' + filename;
	
	console.log(path);
	console.log(query);
	
	const client = new Client({
		user: 'postgres',
		host: '192.168.121.137',
		database: 'lib',
		password: 'P@ssw0rd',
		port: 5432,
	});
	client.connect();
	
	client.query('SELECT id, name from author', (err, res) => {
		console.log(err, res);
		if(err){
			console.error(err);
			rs.writeHead(404);
			rs.end();
			return;
		}
		client.end();

		for(let r of res.rows){

		}
		
		let dbdate = res.rows[0].name;
		
		rs.statusCode = 200;
		rs.setHeader('Content-Type', 'text/html;charset=utf-8');
		rs.end(`database date is ${dbdate}`);
	});
	
	
	
	
});

server.listen(port, hostname, ()=>{
	console.log(`server running at http://${hostname}:${port}`);
})
