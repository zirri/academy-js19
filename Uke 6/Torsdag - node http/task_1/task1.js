//Task 1

// const string = "I am a string";
// const number = 2;
// const bool = false;
// const array = [1,2,3,4];
// const object = {name: "Anne-Siri", age: 30};

// console.log(typeof string, string);
// console.log(typeof number, number);
// console.log(typeof bool, bool);
// console.log(typeof array, array);
// console.log(typeof object, object);

//Task 2

// const combinedObject = {
//     string: string,
//     number: number,
//     bool:bool,
//     array: array,
//     object: object
// }
// console.log(combinedObject);

//Task 3

// const myObj = {
//     1:"",
//     2: undefined,
//     3: null,
//     4:1, 
//     5:0, 
//     6: "Foobar",
//     7: -1,
//     8:{},
//     9:{ key: "property" },
//     10:[],
//     11:[1, 2, 3]
// }

// for(let elem in myObj){
//     console.log(`${myObj[elem]} is ${Boolean(myObj[elem])}` );
// }

//Task 4
// let days =['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];

// for(let el in days){
//     console.log(days[el]);
// };

while(days.length>0){
    console.log(days.shift())
};

// console.log(days)


//Task 5a

// const fruitPreferences = [
//     { fruit: "Apple", likes: true }, 
//     { fruit: "Banana", likes: false },
//     { fruit: "Grapes", likes: true }];

// for(const item in fruitPreferences){
//     let restultStr = "Magnus ";
//     if(fruitPreferences[item].likes==true){
//         restultStr+="like ";
//     }else{
//         restultStr+="doesn't like ";
//     }
//     restultStr += fruitPreferences[item].fruit.toLowerCase()+".";

//     console.log(restultStr);
// };

//Task 5b

// function fruitPrint (fruit, likes){
//     let resultStr = "Magnus ";
//     if(likes==true){
//         resultStr+="like ";
//     }else{
//         resultStr+="doesn't like ";
//     }
//     console.log(resultStr+fruit.toLowerCase()+".");
// }

// for(const item in fruitPreferences){
//     fruitPrint(fruitPreferences[item].fruit, fruitPreferences[item].likes)
// }

//Task 6

// const myString = "Alle barna snakket fint unntatt Anne, hun ville banne.";

// console.log(myString.toUpperCase());
// console.log(myString.toLowerCase());
// console.log(myString.split(' '))

//Task 7
// let days =['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];

// days.map(item =>{
//     console.log(item)
// })

//Task 8

const myObject = { fn: "Magnus", ln: "Skaalsveen", city: "Oslo", profession: "Consultant"};

const keys=[];
const params =[];

for(let item in myObject){
    keys.push(item);
    params.push(myObject[item]);
}

console.log(keys,params);