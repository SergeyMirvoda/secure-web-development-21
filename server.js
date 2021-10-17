const http = require('http');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((rq, rs) => {
	rs.statusCode = 200;
	rs.setHeader('Content-Type', 'text/html');
	console.log(rs.method);
	rs.end(`
	<html>

		
		<head>
		<script>
			const hello = (msg) => {
				console.log('Hello from function12233');
				alert(msg);
			}
		</script>
		</head>
		<body>
		<h1>test</h1>
		<a href="#" onclick="console.log('Client log');alert('click')">Click me</a>
		<a href="#" onclick="hello('Student')">Click me 1</a>
		</body>
	</html>`);
});

server.listen(port, hostname, ()=>{
	console.log(`server running at http://${hostname}:${port}`);
})
