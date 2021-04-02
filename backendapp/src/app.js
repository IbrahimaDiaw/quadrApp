const express = require('express');
const couchbase = require('couchbase');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const cluster = new couchbase.Cluster("couchbase://localhost:8091");
cluster.authenticate('Ibrahima', 'password')
const bucket = cluster.openBucket("technique");
module.exports.bucket = bucket
const routes = require('./route/router')(app);

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
