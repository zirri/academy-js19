function writeHTML(str){
    document.getElementById("oppgaver").innerHTML += str;
}

function writeTaskHeader(){
    writeHTML("<br><hr><h2> Oppgave "+taskNumber+"</h2>")
    taskNumber++;
}

var taskNumber = 1;

//Oppgave 1
writeTaskHeader();

function repeat(str,n){
    if (n==1){
         return str;
    }else if(n>1){
        return str + repeat(str, n-1);
    }else{
        return 'ugylig input'
    }
}

writeHTML(repeat('hei',6)+"<br>");

//oppgave 2
writeTaskHeader();

function printRange(n,m){
    if(n==m){
        return n 
    }else if (n<m){
        return n + " " + printRange(n+1,m);
    }else{
        return 'Ugyldig input'
    }
}

writeHTML(printRange(25,72));

//oppgave 3
writeTaskHeader();

function exponent(base, exp){
    if(exp==0){
        return 1
    }else{
        return base*exponent(base, exp-1)
    }
}

writeHTML(exponent(2,5));


//Oppgave 4
writeTaskHeader();

function addFibbonachi(list, n){
    if(n == 0){
        return list;
    }else{
        var extendedList = list.concat(list[list.length-2]+list[list.length-1])
        return addFibbonachi(extendedList, n - 1);
    }
}

function fibonacciSequence(n){
    return addFibbonachi([0,1],n-2)
}

writeHTML(fibonacciSequence(6));