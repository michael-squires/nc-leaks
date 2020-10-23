// Using Node's http module create a web server that responds with 'hello' when it receives a GET request on the path /api
// Add a GET /api/northcoders endpoint that serves a JSON object of all the northcoders which shows their name, job details, image and username.
// Add a GET /api/northcoders/:username parametric endpoint which serves the above information for one northcoder.
// Add a GET /api/pets/:username parametric endpoint which serves a northcoders pets.
// Add a GET /api/interests/:username parametric endpoint which serves a northcoders interests.



const http = require('http');
fs = require('fs');


const server = http.createServer(function (request, response) {
    //console.log(request)
    const { url, method } = request;
    console.log('url', url)
    if (url === '/api/northcoders') {
        fs.readFile('northcoders.json', 'utf8', function (err, northcoders) {
            if (err) console.log('cannot read file, err');
            else {
                response.setHeader('Content-Type', 'application/json');
                response.write(northcoders);
                response.end();
            }
        })
    }
    else if (url === `/api/northcoders/sunneeeee`) {
        fs.readFile('northcoders.json', 'utf8', function (err, northcoders) {
            if (err) console.log('cannot read file, err');
            else {
                northcoders = JSON.parse(northcoders);
                const northcoder = northcoders.find(({ username }) => (username === 'sunneeeee'));
                console.log('northcoder', northcoder);
                response.setHeader('Content-Type', 'application/json');
                response.write(JSON.stringify(northcoder));
                response.end();
            }
        })
    }



    //response.write('hello')
    //response.end()
})

server.listen(8080, function () {
    console.log("I'm listening!")
});
