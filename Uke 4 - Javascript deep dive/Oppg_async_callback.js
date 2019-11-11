//Oppgave 1

var multiplyAsync = function(a, b, callback){
    setTimeout(function(){
        var result = a*b;
        callback(null,result);
    }, 2000);
}

multiplyAsync(2, 3, function (err, result) {
    console.log(result);
});

//Oppgave 2

var multiplyAsync = function(a, b, callback){
    setTimeout(function(){
        if(a>1000 || b>1000){
            try{
                throw new Error('Operand too large!');
            }catch (err){
                callback(err);        
            }
        }else{
            var result = a*b;
            callback(null,result);
        }
    }, 2000);
}

multiplyAsync(2, 1001, function (err, result) {
    if(err){
        console.log(err.message);    
    }else{
        console.log(result);
    } 
});

//Oppgave 3

function asyncAdd(a, b, callback){
    setTimeout(function() {
        try{
            var result = a+b;
            throw new Error ( 'troubles!');
        } catch(err) {
            callback(err);
        }  
        callback(null, result);
    },1000);  
}

var multiplyAsync = function(a, b, callback){
    setTimeout(function(){
        if(a>1000 || b>1000){
            try{
                throw new Error('Operand too large!');
            }catch (err){
                callback(err);        
            }
        }else{
            var result = a*b;
            callback(null,result);
        }
    }, 2000);
}

asyncAdd(2,2,function(err, result){
    multiplyAsync(result,6,function(err1, result1){
        console.log(result1);
    })
})

//Oppgave 4

function asyncAdd(a, b, callback){
    setTimeout(function() {
        try{
            var result = a+b;
        } catch(err) {
            callback(err);
        }  
        callback(null, result);
    },1000);  
}

var multiplyAsync = function(a, b, callback){
    setTimeout(function(){
        
            try{
                if(typeof a != "number" || a>1000 || b>1000){
                    throw new Error('Operand too large!');
                }else{
                    var result = a*b;
                    callback(null,result);
                }
            }catch (err){
                callback(err);        
            }
        
    }, 2000);
}

var divideAsync = function(a, b, callback){
    setTimeout(function(){
        if(b==0){
            try{
                throw new Error('Can\'t divide by zero');
            }catch (err){
                callback(err);        
            }
        }else{
            var result = a/b;
            callback(null,result);
        }
    }, 2000);
}

asyncAdd(2,2,function(err, result){
    multiplyAsync(result,6,function(err1, result1){
        divideAsync(result1,10,function(err2, result2){
            console.log(result2);
        })
    })
})

//----------------------------------------------------------------
function asyncAdd(a, b, cb){
    setTimeout(function() {
        cb(a+b, 10, print);
    },1000);  
    return "Running code..."
}

var multiplyAsync =(a, b, callback) =>{
    setTimeout(function(){
        callback(a*b)
    }, 2000);
}

var print = (str) =>{
    setTimeout(function(){
        console.log(str);
    }, 2000);   
}

asyncAdd(2,2,multiplyAsync);