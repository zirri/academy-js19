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

//Oppgave 8 og 9 - hjelpefunksjon

function mapDupliactesInArray(list){
    var uniqueArray = [];
    var duplicatesArray=[];

    for (var i=0; i<list.length; i++){
        if(uniqueArray.indexOf(list[i])<0){
            uniqueArray.push(list[i]);
        }else{
            duplicatesArray.push(list[i])
        }
    }
    return [uniqueArray, duplicatesArray];
}

//Oppgave 8
document.getElementById("oppgaver").innerHTML += "<br><hr><h2> Oppgave 8 </h2>";

function removeDuplicates(list){
    resultUniquieArray = mapDupliactesInArray(list)[0];
    return resultUniquieArray;
}

document.getElementById("oppgaver").innerHTML += removeDuplicates([1,1,2,3,4,4,2,2,2]);

//Oppgave 9
document.getElementById("oppgaver").innerHTML += "<br><hr><h2> Oppgave 9 </h2>";

function getDuplicates(list){
    resultDuplicateArray = mapDupliactesInArray(list)[1]
    return resultDuplicateArray;
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

document.getElementById("oppgaver").innerHTML += sortList([6,7,8,9,4,5,3,2,1]);


//Oppgave 10 - alternativ
document.getElementById("oppgaver").innerHTML += "<br><hr><h2> Oppgave 10 - alternativ løsning</h2>";

function sortList(list){
    var sortFinished = false;
    while(!sortFinished){
        sortFinished = true;
        for(var i = 0; i<list.length-1; i++){
            if(list[i]>list[i+1]){
                var temp = list[i+1];
                list[i+1]=list[i];
                list[i] = temp;
                sortFinished = false;
            }
        }
    }
    return list;
}

document.getElementById("oppgaver").innerHTML += sortList([6,7,8,9,4,5,3,2,1]);