import db, { Queries } from './dbContoller.js'

export const getAll = (req, res) => {
  const q = Queries.getAll
  db.query(q, (err, data) => {
    if (err) {
      console.log(err)
      return res.status(500).json('Unexpected error.')
    }

    return res.status(200).json(data)
  })
}

export const getOne = (req, res) => {
  const id = req.params.id
  const q = Queries.getOne

  db.query(q, [id], (err, data) => {
    if (err) {
      console.log(err)
      return res.status(500).json('Unexpected error.')
    }

    return res.status(200).json(data)
  })
}

export const add = (req, res) => {
  const q = Queries.add
  const values = [null, req.body.password, req.body.username, req.body.email]

  db.query(q, [values], (err, data) => {
    if (err) {
      console.log(err)
      return res.status(500).json('Unexpected error.')
    }
    return res.status(200).json('User registred successfuly: \n', data)
  })
}

export const deleteOne = (req, res) => {
  const id = req.params.id
  const q = Queries.deleteOne

  db.query(q, [id], (err) => {
    if (err) {
      console.log(err)
      return res.status(500).json('Unexpected error.')
    }
    return res.status(200).json('User deleted')
  })
}

export const updateOne = (req, res) => {
  const id = req.params.id
  const q = Queries.update

  const values = [null, req.body.password, req.body.username, req.body.email]

  db.query(q, [...values, id], (err, data) => {
    if (err) {
      console.log(err)
      return res.status(500).json('Unexpected error.')
    }
    return res.json('User updated successfuly: \n', data)
  })
}
