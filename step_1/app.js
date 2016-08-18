// Node Module
const request = require('../node_modules/request-promise');

const dictionary = {
    "github": "https://github.com/jmarcelsw/code2040-ta",
    "token": "token goes here",
}

const options = {
    method: 'POST',
    uri: 'http://challenge.code2040.org/api/register',
    body: dictionary,
    json: true
}

// Request
request(options)
    .then(response = > {
    console.log(response)
})
.
catch(error = > {
    console.log(error)
})
