//Conversion temperature

function conversion() {
    var inputLength = prompt('Input a length, either in meters (m) or feet (ft). \n ie. 200m or 333ft');
    var lengthType = inputLength.charAt(inputLength.length-1).toLowerCase();
    if(lengthType == 'm'){
        var length = +inputLength.slice(0,inputLength.length-1);
        var outputLength = length * 3.28;
        var outputToUser = inputLength+' is equal to '+outputLength+'ft.'
    }else if(lengthType == 't'){
        var length = +inputLength.slice(0,inputLength.length-2);
        var outputLength = length / 3.28;
        var outputToUser = inputLength+' is equal to '+outputLength+'m.'
    }
    alert(outputToUser)
    if(confirm('run again??')){
        conversion();
    }
}

conversion();