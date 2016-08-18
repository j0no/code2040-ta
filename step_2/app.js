// Node Module
const request = require("../node_modules/request-promise");


const reverse = (word) =>  {
    const rWord = word.split("").reverse().join("");
    console.log("Reversed Word: ", rWord);
    return rWord;
}

const send = (reversedWord) =>  {
    const rOptions = {
        method: "POST",
        uri: "http://challenge.code2040.org/api/reverse/validate",
        body: {
            "token" : "015e760aa9c5abf8a22a817f54ca248e",
            "string" : reversedWord
        },
        json: true
    };
    const respondReq = request(rOptions);
    respondReq
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
}

// Ask for word from api

const aOptions = {
    method: "POST",
    uri: "http://challenge.code2040.org/api/reverse",
    body: {
        "token" : "015e760aa9c5abf8a22a817f54ca248e"
    },
    json: true
};

request(aOptions)
    .then(word => {
        console.log("Word: ", word);
        const rWord = reverse(word);
        // Validate
        send(rWord);
    })
    .catch(error => {
        console.log(error)
    })
