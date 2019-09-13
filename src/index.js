import data from './data.js'
import express from 'express'
import search from './search.js'
import path from 'path'
const app = express()
const port = process.env.PORT || 3001

// Endpoint for search query.
app.get('/search', (req, res) => {
  // Get params.
  if (typeof req.query.q === 'undefined') {
    res.status(404).send('Query text not found.')
  } else {
    // Normalize query strings.
    const q = req.query.q || ''
    const t = req.query.t || ''
    const fileSystemHost = `${req.secure ? 'https://' : 'http://'}${req.headers.host}`
    res.json(search(q, t, fileSystemHost))
  }
})

// Endpoint for topics listing.
app.get('/topics', (req, res) => {
  const topicResult = data.topics
  res.json(topicResult)
})

// Serves static files.
app.use(express.static(path.join(process.cwd(), './assets')))

app.listen(port, () => {
  console.log(`Listening on ${port}`)
})
