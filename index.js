//IMPORT CORE MODULES

const https = require('http');
const fs = require('fs');
const path = require('path');

//INITIALIZE GET REQUEST

https.get('http://jsonplaceholder.typicode.com/posts', (res) => {

    res.on('data', (d) => {

        //RECEIVE DATA

        console.log('Data Received')

        //CREATE NEW FOLDER

        fs.mkdir(path.join(__dirname, '/result'), {}, () => {

            console.log('Folder created!');

            // CREATE NEW FILE AND AUTOMATICALLY WRITE DATA TO THE NEWLY CREATED FILE

            fs.writeFile(path.join(__dirname, '/result', 'posts.txt'), d, err => {
                console.log('File created and written to!')
            })
        })
    });

}).on('error', (e) => {

    //ERROR HANDLING

    console.error(e.message);
});