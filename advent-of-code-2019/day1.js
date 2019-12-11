const input = require('./data-day1');
//const input =[100756];

const result = input.reduce((accumulator, current)=>{
    let fuel = Math.floor(current/3)-2;
    let fuelTotal = fuel;
    while(fuel>=0){
        console.log(fuel, fuelTotal);
        fuel = Math.floor(fuel/3)-2;
        if(fuel > 0){
            fuelTotal += fuel;
        }
    }
    return accumulator += fuelTotal;
}, 0);
console.log(result);
