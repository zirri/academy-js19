const request = require('request');

const server = 'https://arbeidsplassen.nav.no';
const endpoint = '/public-feed/api/v1/ads';

const url = server+endpoint;

const publicToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwdWJsaWMudG9rZW4udjFAbmF2Lm5vIiwiYXVkIjoiZmVlZC1hcGktdjEiLCJpc3MiOiJuYXYubm8iLCJpYXQiOjE1NTc0NzM0MjJ9.jNGlLUF9HxoHo5JrQNMkweLj_91bgk97ZebLdfx3_UQ';

//Authorization
// type Bearer 

request.get(url, {
  'auth': {
    'bearer': publicToken
  }
}, callback);
    
function callback(error,response,body){
    console.log('Statuscode: '+response.statusCode);
    let result = JSON.parse(body);
    let titles = result.content.map(item => item.title);
    console.log(titles);
};