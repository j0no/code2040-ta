// Node Module
const request = require('request-promise');

const dictionary = {
    "github": "https://github.com/jmarcelsw/code2040-ta",
    "token": "015e760aa9c5abf8a22a817f54ca248e",
}

const options = {
    method: 'POST',
    uri: 'http://challenge.code2040.org/api/register',
    body: dictionary,
    json: true
};

// Request
request(options)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
