const express = require('express');
const mysql = require('mysql2/promise');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/datos', async (req, res) => {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root@localhost',
    password: 'Jordy5452_8182',
    database: 'agencia'
  });

  const [rows] = await connection.execute('SELECT * FROM tabla');

  await connection.end();

  res.json(rows);
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});