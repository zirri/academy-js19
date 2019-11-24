function myPromise(){
    return new Promise(function(resolve,reject){
        let number = Math.random();
        if(number<0.5){
            setTimeout(()=>{
                resolve('I resolved');
            },2000);
        }else{
            setTimeout(()=>{
                reject('I rejected');
            },3000);

        }
    })
};

myPromise()
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    })