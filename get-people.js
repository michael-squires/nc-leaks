const fs = require('fs');
const https = require('https')

function getPeople() {

    const options = {
        hostname: 'nc-leaks.herokuapp.com',
        path: '/api/people',
        method: 'GET',
    }

    const request = https.request(options, (response) => {
        console.log('response status:', response.statusCode);
        let body = '';
        response.on('data', (packet) => {
            body += packet.toString();
        });
        response.on('end', () => {
            const parsedBody = JSON.parse(body);
            //console.log('body:', parsedBody.people);
            const allPeople = parsedBody.people;
            const northcoders = allPeople.filter(({ job }) => job.workplace === 'northcoders');
            getInterests(northcoders);
            fs.writeFile('northcoderPeople.txt', JSON.stringify(northcoders), (err) => {
                if (err) throw err;
                console.log('The file has been saved!');
            });
        });
    });
    request.end()
};

function getInterests(northcoders) {
    const northcoderInterests = northcoders
        .map(function (northcoder) {
            const options = {
                hostname: 'nc-leaks.herokuapp.com',
                path: `/api/people/${northcoder.username}/interests`,
                method: 'GET',
            }

            const request = https.request(options, (response) => {
                let body = '';
                response.on('data', (packet) => {
                    body += packet.toString();
                });
                response.on('end', () => {
                    const parsedBody = JSON.parse(body);
                    console.log("northcoders interests:", parsedBody)
                    return parsedBody;
                });
            });
            request.end()
        })
    fs.writeFile('northcoderInterests.txt', JSON.stringify(northcoderInterests), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}


getPeople();