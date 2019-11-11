//Oppgave 1

var delayedPrint = function (str, delay){
  setTimeout(function (){
      console.log(str)
  },delay*1000)
};

delayedPrint("test",3)

//Oppgave 2

var printSequence = function (n, m, delay){
    
    for (var i=n; i<=m; i++){
        (function(j){
            setTimeout(function(){
                console.log(j)
            },(delay*(j-n+1))*1000);
        }(i))
    }
}
printSequence(2,5,1)

//Oppgave3 

var printTime = function(interval){
    return setInterval(() => {
        var now = new Date;
        console.log(now.toLocaleTimeString("us")) 
    }, interval*1000);
};

var myInterval = printTime(2);

setTimeout(function() {
    clearInterval(myInterval);
}, 30*1000);

//Oppgave 4

var printSequenceDelayed = function(n,m){
    var timeCount = 0;
    for(var i=0; i<=(m-n);i++){
        timeCount+=i;
        (function(j, delay){
            setTimeout(() => {
                var now = new Date;
                console.log(j+" "+now.toLocaleTimeString("us"));
            }, delay*1000);
        }(i, timeCount));
    }
}

printSequenceDelayed(2,6);


var printSequenceDelayed = function(n,m){
    
    function recurseCall(i,m,delay){
        if (i>m){
            return;
        }
        
        return setTimeout(function(){
            console.log(i+" "+new Date().toLocaleTimeString());
            recurseCall(i+1, m, delay+1)
        },delay*1000);
    }

    recurseCall(n,m,0);
}
printSequenceDelayed(2,6);