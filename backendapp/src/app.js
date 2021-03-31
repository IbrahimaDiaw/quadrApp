console.log('Bonjour ')

const express = require('express')
const bodyParser = require('body-parser')
// const couchbase = require('couchbase')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
// const bucket = (new couchbase.Cluster('http://localhost:8091')).openBucket('technique')

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.get('/byebye', function (req, res) {
  res.send({
    message: 'Test fonctionnement'
  })
})

app.listen(process.env.PORT || 8081)
