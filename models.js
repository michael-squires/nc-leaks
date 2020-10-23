const fs = require('fs');

function readNorthcoders(cb) {
    fs.readFile('northcoders.json', 'utf8', function (err, northcoders) {
        if (err) cb(err);
        else {
            cb(null, northcoders)
        }
    })
}

function readNorthcoder(cb) {
    readNorthcoders((err, northcoders) => {
        northcoders = JSON.parse(northcoders);
        const northcoder = northcoders.find(({ username }) => (username === 'sunneeeee'));
        cb(null, northcoder)
    })
}




    // if (url === `/api/northcoders/sunneeeee`) {
    //     fs.readFile('northcoders.json', 'utf8', function (err, northcoders) {
    //         if (err) console.log('cannot read file, err');
    //         else {
    //             northcoders = JSON.parse(northcoders);
    //             const northcoder = northcoders.find(({ username }) => (username === 'sunneeeee'));
    //             console.log('northcoder', northcoder);
    //             response.setHeader('Content-Type', 'application/json');
    //             response.write(JSON.stringify(northcoder));
    //             response.end();
    //         }
    //     })
    // }



    //response.write('hello')
    //response.end()

module.exports = { readNorthcoders, readNorthcoder };
