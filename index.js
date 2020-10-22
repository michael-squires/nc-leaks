// //Northcoders have set up an api to serve data about past and present employees here: https://nc-leaks.herokuapp.com. 

// A northcoders whistleblower has left you some instructions on how to obtain this data and leak it to the world on an api endpoint.

// //Your first task is to retrieve the instructions left for you by your mole on the inside...

// //Make a http request using nodes https module to the following endpoint to get the instructions left for you: /api/confidential

// //Once you have recieved the response save the message locally as a markdown file for further instructions.

// //That is all...

const fs = require('fs');
const https = require('https')

function getInstructions() {

    const options = {
        hostname: 'nc-leaks.herokuapp.com',
        path: '/api/confidential',
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
            console.log('body:', parsedBody);
            fs.writeFile('README.md', parsedBody.crypticString, (err) => {
                if (err) throw err;
                console.log('The file has been saved!');
            });

        });
    });
    request.end()

};
getInstructions();

