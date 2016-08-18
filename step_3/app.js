// Node Module
const request = require("../node_modules/request-promise");

const getIndexOfStringInArray = (array, value) => {
    const index = array.findIndex((element, index, cArray) => {
        switch (element) {
            case value:
                return true;
                break;
            default:
                return false;
        }
    })
    console.log("The needle (", value, ") is at index: ", index, " in the haystack")
    return index;
}

const send = (index) => {
    const rOptions = {
        method: "POST",
        uri: "http://challenge.code2040.org/api/haystack/validate",
        body: {
            "token": "015e760aa9c5abf8a22a817f54ca248e",
            "needle": index
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
    uri: "http://challenge.code2040.org/api/haystack",
    body: {
        "token": "015e760aa9c5abf8a22a817f54ca248e"
    },
    json: true
};

request(aOptions)
    .then(hay => {
        console.log("Haystack: ", hay.haystack, " , Needle: ", hay.needle);

        const index = getIndexOfStringInArray(hay.haystack, hay.needle);

        send(index);
    })
    .catch(error => {
        console.log(error)
    })
