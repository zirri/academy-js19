//GuessTheNumber

function conversion() {
    var inputTemp = prompt('Input a temperature, either in celcius (C) or fahrenheit (F). \n ie. 37C or 104F');
    var tempType = inputTemp.charAt(inputTemp.length-1).toUpperCase();
    tempAsNumber = +inputTemp.slice(0,inputTemp.length-1)
    var outputTemp;
    if(tempType == 'C'){
        outputTemp = (tempAsNumber * 1.8) + 32;
        outputToUser = inputTemp+' is equal to '+outputTemp+'F.'
    }else if(tempType == 'F'){
        outputTemp = (tempAsNumber - 32)/1.8;
        outputToUser = inputTemp+' is equal to '+outputTemp+'C.'
    }
    alert(outputToUser)
    if(confirm('run again??')){
        conversion();
    }
}

conversion();