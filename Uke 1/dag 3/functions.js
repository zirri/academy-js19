//Oppgave 1
function isPalindrome1(num){

    //inputString = (num.toString());
    inputString = ""+num; //12345
    outputString = "";

    for(let i=inputString.length-1; i>=0; i--){
        outputString += inputString[i]; 
    }

    if(inputString===outputString){
        return true;
    }else{
        return false;
    }
}
document.getElementById("oppgaver").innerHTML += "<h2> Oppgave 1</h2>";
document.getElementById("oppgaver").innerHTML += (isPalindrome1(1231));


//Oppgave 2
function isPalindrome2(str){

    var inputString = str.toLowerCase();
    console.log(inputString)
    var outputString = "";

    for(let i=inputString.length-1; i>=0; i--){
        outputString += inputString[i]; 
    }

    if(inputString==outputString){
        return true;
    }else{
        return false;
    }
}
document.getElementById("oppgaver").innerHTML += "<h2> Oppgave 2</h2>";
document.getElementById("oppgaver").innerHTML += (isPalindrome2("Rats live on no evil star"));


//Oppgave 3
function wordCount(str){
    var strArray = str.split(" ");
    return strArray.length 
};
document.getElementById("oppgaver").innerHTML += "<h2> Oppgave 3</h2>";
document.getElementById("oppgaver").innerHTML += (wordCount("Rats live on"));


//Oppgave 4
function repeat(str, n){
    var string = "";
    for (var i=0; i<n; i++){
        string += " "+str;
    }
    return string
};
document.getElementById("oppgaver").innerHTML += "<h2> Oppgave 4</h2>";
document.getElementById("oppgaver").innerHTML += (repeat("Rats live on", 4));

//Oppgave 5
function reverseWords(str){
    var inputString = str.toLowerCase();
    var outputString = "";
    var strArray = inputString.split(" ");
    
    for(var i = 0; i<strArray.length; i++){
        var tempWord = "";
        for(let j=strArray[i].length-1; j>=0; j--){
            tempWord += strArray[i].charAt(j); 
        }
        outputString += tempWord + " ";
    }
    return outputString;
}

document.getElementById("oppgaver").innerHTML += "<h2> Oppgave 5</h2>";
document.getElementById("oppgaver").innerHTML += (reverseWords("I am a happy dog "));

//Oppgave 6
function capitalize(str){
    var stringArray = str.split(". ");
    var outputString = "";
    for(var i=0; i<stringArray.length; i++){
        var lowerCaseString = stringArray[i].toLowerCase();
        var firstLetter = stringArray[i].charAt(0).toUpperCase();
        outputString += firstLetter + lowerCaseString.slice(1) + ". ";
    }
    outputString = outputString.slice(0,outputString.length-2)
    return outputString
}
document.getElementById("oppgaver").innerHTML += "<h2> Oppgave 6</h2>";
document.getElementById("oppgaver").innerHTML += (capitalize("hello world. I am God."));

//Oppgave 7
function areaOfCircle(r){
    area = r*r*Math.PI;
    return "Area of circle with r = "+r+" is: "+area
}
document.getElementById("oppgaver").innerHTML += "<h2> Oppgave 7</h2>";
document.getElementById("oppgaver").innerHTML += (areaOfCircle(4));

//Oppgave 8
function exponent(base, exp){
    result = 1;
    for(var i=0; i<exp; i++){
        result *= base;
    }
    return result;
}
document.getElementById("oppgaver").innerHTML += "<h2> Oppgave 8</h2>";
document.getElementById("oppgaver").innerHTML += (exponent(2,3));
