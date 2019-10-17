//Oppgave 7
document.getElementById("oppgaver").innerHTML += "<h2> Oppgave 7</h2>";

function flipCase(str){
    var resultString = '';
    for(var i=0; i<str.length; i++){
        if(str.charAt(i)==str.charAt(i).toUpperCase()){
            resultString += str.charAt(i).toLowerCase();
        }else{
            resultString += str.charAt(i).toUpperCase();
        }
    }
    return resultString;
}

document.getElementById("oppgaver").innerHTML += flipCase("heLLO wORLD");

//Oppgave 8
document.getElementById("oppgaver").innerHTML += "<br><hr><h2> Oppgave 8 </h2>";

function removeDuplicates(list){
    var resultArray = [];

    for (var i=0; i<list.length; i++){
        if(resultArray.indexOf(list[i])<0){
            resultArray.push(list[i]);
        }
    }
    return resultArray;
}

document.getElementById("oppgaver").innerHTML += removeDuplicates([1,1,2,3,4,4,2,2,2]);

//Oppgave 9
document.getElementById("oppgaver").innerHTML += "<br><hr><h2> Oppgave 9 </h2>";

function getDuplicates(list){
    var resultArray = [];
    var duplicatesArray=[];

    for (var i=0; i<list.length; i++){
        if(resultArray.indexOf(list[i])<0){
            resultArray.push(list[i]);
        }else{
            duplicatesArray.push(list[i])
        }
    }
    return duplicatesArray;
}

document.getElementById("oppgaver").innerHTML += getDuplicates([1,1,2,3,4,4,2,2,2]);

//Oppgave 10
document.getElementById("oppgaver").innerHTML += "<br><hr><h2> Oppgave 10 </h2>";

function sortList(list){
    var sortedList = [];
    sortedList[0] = list[0];
    for (var i=1; i<list.length; i++){
        for (var j=0; j<sortedList.length; j++){
            if(list[i-1]<sortedList[j]){
                var tempArrEnd = sortedList.slice(j);
                var tempArrStart = sortedList.slice(0,j);
                tempArrStart.push(list[i]);
                sortedList = tempArrStart.concat(tempArrEnd);
                console.log(sortedList);
            }
        }
    }

    return sortedList;
}

document.getElementById("oppgaver").innerHTML += sortList([1,3,4,2]);
