const input = require('./data-day2');

function partOne(){
    input[1]=12;
    input[2]=2;

    // const input = [1,1,1,4,99,5,6,0,99];
    let i=0;
    while(i<input.length){
        if(input[i] == 1){
            input[input[i+3]] = input[input[i+1]]+input[input[i+2]];
            i = i+4;
        }else if(input[i] == 2){
            input[input[i+3]] = input[input[i+1]]*input[input[i+2]];
            i = i+4;
        }else if(input[i] == 99){
            break;
        }else{
            console.log('unknown property at index '+i);
            break;
        }
    };

    console.log(input[0]);
}

//partOne();

