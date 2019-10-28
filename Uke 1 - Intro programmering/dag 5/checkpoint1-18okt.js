// Oppgave 1
console.log('---Oppgave 1---');

function volumeOfSphere(r) {
    var volume = Math.pow(r, 3) * Math.PI * 4 / 3;
    return volume;
}

console.log(volumeOfSphere(4));

//Oppgave 2
console.log('---Oppgave 2---');

function printPattern(n, str){
    var outputString = '';
    for(var i=0; i<n; i++){
        outputString += str;
        console.log(outputString);
    }
}

printPattern(5, 'oi');

//oppgave 3
console.log('---Oppgave 3---');

function printRepeatedRange(n, m, x){

    for(var i=0; i<x; i++){
        for(var j=n; j<=m; j++){
            console.log(j)
        }
    }
}

printRepeatedRange(1,4,2);

//oppgave 4
console.log('---Oppgave 4---');

function printSequence(n, m){
    for (var i=n; i<=m; i++){
        if(i%15==0){
            console.log('wubbalubba');
        }else if(i%5==0){
            console.log('lubba');
        }else if(i%3==0){
            console.log('wubba')
        }else{
            console.log(i);
        }
    }
}

printSequence(1, 20);

//Oppgave 5
console.log('---Oppgave 5---');

function removeOdds(list){
    var listEven = list.filter(num => num%2==0)
    return listEven;
}

console.log(removeOdds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//Oppgave 6
console.log('---Oppgave 6---');

function dearSanta(forbidden){
    forbidden = forbidden.join(' ').toLowerCase().split(' ')
    var wish = prompt('Ho ho! What do you want for Christmas?').toLowerCase();
    
    if(forbidden.indexOf(wish)>0){
        return 'Santa: You\'ve been naughty this year and will only get coal in your stockings!'
    }else{
        return 'Santa: You\'ve been nice this year and will get '+ wish +' for Christmas!'
    }
}
console.log(dearSanta(['Books', 'CAR','guitar','fancy dress']));