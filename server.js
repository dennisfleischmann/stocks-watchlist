
const express = require('express');

const app = express();
app.use(express.static('public'));

/**
 * HEROKU CONFIG
 */
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',
    mongoURL = process.env.OPENSHIFT_MONGODB_DB_URL || process.env.MONGO_URL,
    mongoURLLabel = '';

app.get('/', function (req, res) {
  // try to initialize the db on every request if it's not already
  // initialized.
  res.send('message');
});

app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

module.exports = app;
