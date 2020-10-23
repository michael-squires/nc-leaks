// Using Node's http module create a web server that responds with 'hello' when it receives a GET request on the path /api
// Add a GET /api/northcoders endpoint that serves a JSON object of all the northcoders which shows their name, job details, image and username.
// Add a GET /api/northcoders/:username parametric endpoint which serves the above information for one northcoder.
// Add a GET /api/pets/:username parametric endpoint which serves a northcoders pets.
// Add a GET /api/interests/:username parametric endpoint which serves a northcoders interests.



const http = require('http');
fs = require('fs');
const {sendNorthcoders} = require('./controllers')
const {sendNorthcoder} = require('./controllers')

const server = http.createServer(function (req, res) {
    const { url, method } = req;
    console.log(url)
    if (url === '/api/northcoders') {
        sendNorthcoders(req, res);
    } else if (url === `/api/northcoders/sunneeeee`) {
        // console.log(url)
        sendNorthcoder(req, res);
    }
})


server.listen(8080, function () {
    console.log("I'm listening!")
});
