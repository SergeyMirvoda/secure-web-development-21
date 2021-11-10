const express = require('express');
const app = express();
const port = 8080;
const { Client } = require('pg');


app.use(express.static('static'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

const client = new Client({
    user: 'postgres',
    host: '192.168.121.137',
    database: 'lib',
    password: 'P@ssw0rd',
    port: 5432,
});
client.connect();





app.get('/', (req, res) => {
  res.send('SQli 101! <br/> 1: <a href="/login.html">login</a>')
})

app.post('/signin', async (req, res) => {
    let login = req.body.name;
    let pass = req.body.pass;
    let sql = "SELECT name as result FROM users WHERE name = '" + login + "' AND pass = md5('" + pass+"')";
    try{
        let data = await client.query(sql);
        if(data.rows.length>0 && data.rows[0].result){
            res.send(`success ${data.rows[0].result}`);
        }else
        {
            res.send(`fail ${login}`);
        }
    }
    catch(e)
    {
        console.log(e);
        res.send(`error ${e.message}`);
    }

  })


app.listen(port, ()=>{
	console.log(`server running at http://localhost:${port}`);
})
