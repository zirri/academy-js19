let request = require('request');

 const url = 'https://api.github.com/users/magska';

const options = {
    "method": "GET",
    "url": url,
    "headers": {
        'User-Agent': 'zirri'
    },
}

request(options,function (error, status, body){
    console.log(status.statusCode);
    console.log(error);
    let content = JSON.parse(body);
    console.log(content.login);
})

// let fetch = require('node-fetch')

// async function getGitUser (url){
//     const data = await fetch(url);
//     console.log(data)
// }

// getGitUser(url)