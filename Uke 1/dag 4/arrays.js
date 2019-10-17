//Oppgave 1
document.getElementById("oppgaver").innerHTML += "<h2> Oppgave 1</h2>";

function printItems(list){
    var result = [];
    for(var i=0; i<list.length; i++){
        document.getElementById("oppgaver").innerHTML += list[i]+', ';
    }
    return result;
}
var myList = ['Harry', 'Snape', 'Dumbledore'];
printItems(myList);

//Oppgave 1
document.getElementById("oppgaver").innerHTML += "<br><hr><h2> Oppgave 1</h2>";

function sumItems(list){
    var sum = 0;
    for(var i=0; i<list.length; i++){
        sum += list[i];
    }
   return sum
}

var myListNumbers = [1,2,3,4];
document.getElementById("oppgaver").innerHTML += '' +myListNumbers + '=>' +sumItems(myListNumbers);

//Oppgave 2
document.getElementById("oppgaver").innerHTML += "<br><hr><h2> Oppgave 2</h2>";

function generateList(value, len){
    var list = [];
    for(var i=0; i<len; i++){
        list.push(value);
    }
    return list
}

document.getElementById("oppgaver").innerHTML += generateList('test', 3);

//Oppgave 3
document.getElementById("oppgaver").innerHTML += "<br><hr><h2> Oppgave 3</h2>";

function generateRange(n,m){
    var list = [];
    for(var i=n; i<=m; i++){
        list.push(i);
    }
    return list;
}

document.getElementById("oppgaver").innerHTML += generateRange(6, 20);

//Oppgave 4
document.getElementById("oppgaver").innerHTML += "<br><hr><h2> Oppgave 4</h2>";

function repeatList(list,m){
    var myList=[];
    for(var i=0; i<m; i++){
        myList = myList.concat(list);
    }
    return myList;
}

document.getElementById("oppgaver").innerHTML += repeatList(['Harry', 'Dumbledore'], 2);

//Oppgave 5
document.getElementById("oppgaver").innerHTML += "<br><hr><h2> Oppgave 5</h2>";

function repeatItems(list,m){
    var myList=[];
    for(var i=0; i<list.length; i++){
        for(var j=0; j<m; j++){
            myList.push(list[i]);
        }
    }
    return myList;
}

document.getElementById("oppgaver").innerHTML += repeatItems(['Harry', 'Dumbledore'], 3);

//Oppgave 5 - variant 2
document.getElementById("oppgaver").innerHTML += "<br><h4>alternativ løsning</h4><br";

function repeatItems2(list,m){
    var myList=[];
    var tempArr = [];
    tempArr[m-1] = 0;
    for(var i=0; i<list.length; i++){
        tempArr = tempArr.fill(list[i],0,m);
        myList = myList.concat(tempArr)
    }
    return myList;
}

document.getElementById("oppgaver").innerHTML += repeatItems2(['Harry', 'Dumbledore'], 3);

//Oppgave 5 - variant 3 med egne funksjoner
document.getElementById("oppgaver").innerHTML += "<br><h4>alternativ løsning 2</h4><br";

function repeatItems3(list, m){
    var result = [];
    for(var i=0; i<list.length; i++){
        result.push(generateList(list[i],m));
    }
    console.log(result)
    return result;
}
document.getElementById("oppgaver").innerHTML += repeatItems3(['Harry', 'Dumbledore'], 3);

//Oppgave 6
document.getElementById("oppgaver").innerHTML += "<br><hr><h2> Oppgave 6 </h2>";

function mergeLists(list1,list2){
    var itemExists = false;
    for(var i=0; i<list2.length; i++){
        if(list1.indexOf(list2[i])<0){
            list1.push(list2[i]);
        }
    }
    document.getElementById("oppgaver").innerHTML += '[' +list1 + ']';
}

mergeLists(['Harry', 'Dumbledore'], ['Frodo','Merry','Harry']);