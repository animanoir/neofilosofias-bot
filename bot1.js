const config = require('./twit-config')
const twit = require('twit')

const T = new twit(config)

T.post('statuses/update', {
  status: '47we'
}, tweeted)

function tweeted(err, data, response) {
  console.log(err);
}

// Función de prueba
function tweeter() {
  var num = Math.floor(Math.random() * 100);
  var tweet = num;

  T.post('statuses/update', {
    status: tweet
  }, tweeted);
}