//Task 1

//An arrow function expression is a syntactically compact alternative to a regular 
//function expression, although without its own bindings to the this, arguments, super,
// or new.target keywords. Arrow function expressions are ill suited as methods, and 
// they cannot be used as constructors.

//Altså: 
// - Har ikke arguments (må evt. bruke spread-operator)
// - "binds" this (this vil peke til parent til calling object)

//Task 2
const isNumber = (input) => {
    return (typeof input == 'number');
}

// console.log(isNumber(3));
// console.log(isNumber("test"))

// const sum = (input1, input2, validator) =>{
//     if(validator(input1) && validator(input2)){
//         return input1+input2;
//     }
//     return "something went wrong";
// }

// console.log(sum(1,10,isNumber));

//Task 3
// const isString = (input) => {
//     return (typeof input == 'string');
// };

// function isString2 (input){
//     return (typeof input == 'string');
// };

//console.log(sum('1','10',isString));

// const sum = (input1, input2, validator) =>{
//     try{
//         if(validator(input1) && validator(input2)){
//             return input1+input2;
//         }else{
//             throw new Error("inputs were not the correct type")
//         }
//     }catch (e){
//         console.log("Error: " +e.message+". Setting default value to 0.");
//         return 0;
//     }
// }

// console.log(sum(1,'10',isString));

//Task 5
// function printResult(i){
//     console.log(`You guessed right on attempt number ${i}.`)
// }


// const alikeNumbers = (num, callback) =>{
//     try {
//         let i=0;
//         if(typeof num!='number'){
//             throw new Error('Input is not a number');
//         }
//         if(0>num || num>999){
//             throw new Error('Input is out of range');
//         }
//         while(true){
//             i++;
//             const randomNum = Math.floor(Math.random()*999);
//             if(num == randomNum){
//                 callback(i);
//                 return i;
//             }
//         }
//     }catch (err){
//         console.log('Error: '+err.message)
//         return err;
//     }
// }

// alikeNumbers(5,printResult)

//Task 6
function printComicTitle(error, title){
    if(error){
        console.log(error.message)
        return
    }
    console.log(title);
}

function getComic(url, callback){
    var request = require('request');
    request.get(url, function (error,response,body) {
        if(error){
            return callback(error,null);
        }
        if(response.statusCode!=200){
            const errorStatus = new Error(`Something went wrong. Returned statuscode: ${response.statusCode}`)
            return callback(errorStatus)
        }
        let bodyObj = JSON.parse(body);
        return callback(null,bodyObj.title)
    });
}

getComic('https://xkcd.com/info.0.json',printComicTitle);

