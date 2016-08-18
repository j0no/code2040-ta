/* Node Module
const request = require('../node_modules/request-promise');

const ask = new request();
const respond = new request(); */

const reverse = (word) => {
    return word.split("").reverse().join("");
}

console.log(reverse("ass"));

