import mysql from 'mysql';

export const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'P@an-Sm@rt9145',
  database: 'blog',
});
