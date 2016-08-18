// Node Module
const request = require("../node_modules/request-promise");

const filterOutPrefixedStrings = (prefix, array) => {
    const newArray = array.filter(string => {
        if (string.startsWith(prefix)) {
            return false;
        } else {
            return true;
        }
    })
    return newArray;
}

const send = (newArray) => {
    const rOptions = {
        method: "POST",
        uri: "http://challenge.code2040.org/api/prefix/validate",
        body: {
            "token": "015e760aa9c5abf8a22a817f54ca248e",
            "array": newArray
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

// Ask for array from api

const aOptions = {
    method: "POST",
    uri: "http://challenge.code2040.org/api/prefix",
    body: {
        "token": "015e760aa9c5abf8a22a817f54ca248e"
    },
    json: true
};

const askReq = request(aOptions)
askReq.then(response => {
        console.log("prefix: ", response.prefix, "array: ", response.array);
        const newArray = filterOutPrefixedStrings(response.prefix, response.array)
        send(newArray);
    })
    .catch(error => {
        console.log(error)
    })
