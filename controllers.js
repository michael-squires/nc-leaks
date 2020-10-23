const fs = require('fs');
const { readNorthcoders, readNorthcoder } = require('./models')

function sendNorthcoders(req, res) {
    readNorthcoders((err, northcoders) => {
                res.setHeader('Content-Type', 'application/json');
                res.write(northcoders);
                res.end();       
        }) 
    }

function sendNorthcoder(req, res) {
    readNorthcoder((err, northcoder) => {
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(northcoder));
        res.end();       
        }) 
    }

module.exports = { sendNorthcoders, sendNorthcoder };