const input = 'KNO fmw55k8m7i179 z98øyåz8æy67aåy0å6æ7aø1å1438åa5a fmw55k8m7i179 95';

const result = [];

const arrayInput = input.split('');
for(let i=0; i<arrayInput.length; i++){
    let letter = arrayInput[i];
    if(letter == ' '){
        result.push(letter);
        continue;
    }
    switch(letter){
        case '5': 
            letter = 'g';
            break;
        case '7': 
            letter = '`';
            break;
        case '3': 
            letter = 'e';
            break;
        case '0': 
            letter = 'o';
            break;
        case '1': 
            letter = 'o';
            break;
        case '9': 
            letter = 'n';
            break;
    }
    


    let charCode = letter.charCodeAt(0);


    switch(letter){
        case 'æ':
            charCode=123;
            break;
        case 'ø':
            charCode=124;
            break;
        case 'å':
            charCode=125;
            break;
    }
    charCode += 5;
    let resultLetter = String.fromCharCode(charCode);
    switch(charCode){
        case 123: 
            resultLetter = 'æ';
            break;
        case 124: 
             resultLetter = 'ø';
            break;
        case 125: 
            resultLetter = 'å';
            break;
        case 126: 
            resultLetter = 'a';
            break;
        case 127: 
            resultLetter = 'b';
            break;
        case 128: 
            resultLetter = 'c';
            break;
        case 129: 
            resultLetter = 'd';
            break;
        case 130: 
            resultLetter = 'e';
            break;
        case 61: 
            resultLetter = 'a';
            break;
    }

    result.push(resultLetter);
}
console.log(result.join(''))