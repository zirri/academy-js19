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

async function testFunc(){
   let res = await myPromise();
   console.log(res)
   console.log("test")
};

testFunc();
