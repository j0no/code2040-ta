// Node Modules
const request = require("../node_modules/request-promise");
const moment = require("../node_modules/moment");

const addInterval = (timestamp, interval) => {
    const newDatestamp = moment(timestamp)
        .add({ seconds: interval })
        .toISOString()
        .replace('.000', '')

    return newDatestamp;
}

const send = (newDatestamp) => {
    const rOptions = {
        method: "POST",
        uri: "http://challenge.code2040.org/api/dating/validate",
        body: {
            "token": "015e760aa9c5abf8a22a817f54ca248e",
            "datestamp": newDatestamp
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
    uri: "http://challenge.code2040.org/api/dating",
    body: {
        "token": "015e760aa9c5abf8a22a817f54ca248e"
    },
    json: true
};

const askReq = request(aOptions)
askReq
    .then(response => {
        console.log("datestamp: ", response.datestamp, "interval: ", response.interval);
        const newDatestamp = addInterval(response.datestamp, response.interval);
        console.log("newDatstmp: ", newDatestamp)
        send(newDatestamp);
    })
    .catch(error => {
        console.log(error);
    })
