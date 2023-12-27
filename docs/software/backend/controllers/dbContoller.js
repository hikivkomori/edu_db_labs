import mysql from 'mysql'

export const Queries = {
  getAll: 'SELECT * FROM users',
  getOne: 'SELECT * FROM users WHERE id = ?',
  add: 'INSERT INTO users (`id`, `password`, `username`, `email`) VALUES (?)',
  deleteOne: 'DELETE FROM users WHERE id = ?',
  update: 'UPDATE users SET `password`= ?, `username`= ?, `email`= ? WHERE id = ?'
}

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mydb'
})

export default db
