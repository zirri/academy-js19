//OPPGAVE 1A

function sumOfRange(n, m){
    let sum = 0;
    if(n<0 || m<0){
        throw new Error('Invalid input')
    }
    if(n>m){
        [n,m] = [m,n];
    }
    for(let i=n; i<=m;i++){
        sum += i;
    }
    return sum;
}

//test:
console.log('Result from oppg 1a: '+sumOfRange(50,10));

//OPPGAVE 1B
function addNumbersFromInput(){
    let numberStart = +prompt('input a number as a starting number');
    let numberEnd = +prompt('input a second number as the ending number');

    let sum = sumOfRange(numberStart,numberEnd);
    alert(`The sum of all numbers i range from ${numberStart} to ${numberEnd} is ${sum}.`)
}

//test:
addNumbersFromInput();

//OPPGAVE 1C

function sumOfRangeRecursive(n,m){
    if(n<0 || m<0){
        throw new Error('Invalid input')
    }
    if(n>m){
        [n,m] = [m,n];
    }

    function recursiveAdding(n,m){
        if(n==m){
            return n;
        }else{
            return n+sumOfRangeRecursive(n+1,m);
        }
    };

    return recursiveAdding(n,m);
}

//test:
console.log('Result from oppg 1c: '+sumOfRangeRecursive(50,10));