const url = 'https://api.github.com/users/magska';

const request = require('request');

function getGitData(url){
    return new Promise(function(resolve,reject){
        request.get(url,function(error,status,body){
            console.log(error);
            console.log(status.statusCode);
            console.log(body);
            if(error){
                reject(error);
            }else{
                resolve(body);
            }
        });
    });
}

getGitData(url)
    .then(res=>{
        console.log('Resolved: '+body)
    })
    .catch(err=>{
        console.log('Rejected: '+err)
    })