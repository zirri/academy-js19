function myPromise(){
    let num = Math.random();
    return new Promise((resolve, reject) => {
        if(num>0.5){
            setTimeout(()=> resolve("I resolved"))
        }else{
            setTimeout(()=> reject("I rejected"))
        }
    })
};

myPromise()
    .then(res => console.log(res))
    .catch(err => console.log(err))