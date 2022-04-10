const express = require('express')
const app = express()
const port = 3000
const r1 = require('./routes/r1/r1')

app.use(express.json());
app.use(express.urlencoded());


app.use(express.static(__dirname + '/static'))
app.use('/r1', r1);
app.use('/a', require('./routes/axios/axios'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.post('/', (req, res) => {
  console.log(req.body);
  res.redirect('/')
})

app.get('/1', (req, res) => {
    res.send('Goodbye World!')
  })
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})