import express from 'express'

import { mockTodos } from './mockTodos.js'

const PORT = process.env.PORT ?? `3001`
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.json(mockTodos)
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
