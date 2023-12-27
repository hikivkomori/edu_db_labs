import express from 'express'
import cors from 'cors'
import {
  add,
  deleteOne,
  getAll,
  getOne,
  updateOne
} from './controllers/userController.js'

const PORT = 8000

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json('Success')
})

app.get('/users', getAll)
app.get('/users/:id', getOne)
app.post('/users', add)
app.delete('/users/:id', deleteOne)
app.put('/users/:id', updateOne)

app.listen(PORT, (err) => {
  if (err) {
    console.log(err)
  }
})
