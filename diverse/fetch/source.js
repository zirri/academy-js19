const fetch = require('node-fetch');
let url = 'https://xkcd.com/info.0.json';
let dataToUseLater = []
fetch(url)
.then(res => res.json())
.then(data => {
    returnData(data);
})
function returnData(dataFromFetch) {
    //console.log(dataFromFetch)
    dataToUseLater.push(dataFromFetch)
    console.log("inside callback",dataToUseLater)
}
console.log("end of script",dataToUseLater)
setTimeout(()=>{console.log("with timeout",dataToUseLater)}, 10000)