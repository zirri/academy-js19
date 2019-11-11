import { ok } from "assert";

//Oppgave 1

//Kode:
var human = {
    walk: function () {
        console.log(this.name + ' walks');
    },
    run: function () {
        console.log(this.name + ' runs');
    }
};

var programmer = {
    work: function () {
        console.log(this.name + ' types away on the keyboard');
    },
    relax: function() {
        console.log(this.name + ' plays a video game');
    }
};

var lawyer = {
    work: function () {
        console.log(this.name + ' prepares a case');
    },
    play: function () {
        console.log(this.name + ' does a line of blow *snort*');
    }
};

var justJohnny = {
    name: 'Johnny'
};

var johnny = Object.assign({}, justJohnny, human, programmer, lawyer);
console.log(johnny.work())

/*
johnny vil ha alle properties fra alle objektene hn er satt sammen av. Han vil
ha følgende properties:
*name som han fikk fra justJhonny-objektet
*walk og run som han fikk fra human-objektet
*relax som han fikk fra programmer-objeket
*work og play som han fikk fra lawyer-objektet

johnny arvet også work-propertien fra programmer-objektet, men denne ble overskrevet av
work-metoden fra lawyer-objektet (siden dette objektet ligger etter i argumentlisten til 
Object.assign()).

På grunn av dette vil johnny.work() printe "Johnny prepares a case"
*/

//Oppgave 2

function makeItemStore(){
    var itemsInStore=[];

    return{
        addItem: function(...item){
            itemsInStore.push(...item);
        },
        printItemCount: function(){
            if(itemsInStore.length == 0){
                console.log('You have no items');
            }else{
                console.log('You have currently '+ itemsInStore.length +' items')
            }
        },
        printItems: function(){
            if(itemsInStore.length == 0){
                console.log('You have no items');
            }else{
                var result = 'You have the following items: ';
                itemsInStore.forEach(item => result += item + ", ");
                console.log(result.slice(0, result.length-2))
            }
        }
    }
}

var store = makeItemStore();
store.printItemCount();
store.printItems();
store.addItem('shovel');
store.addItem('shoe');
store.printItemCount();
store.printItems();

//Oppgave 3

function printItems(items){
    for(var i=0; i<items.length;i++){
        (function(obj, j){
            setTimeout(function(){
                console.log("Item " + (j+1)+ " is a " +obj.name);
            },obj.delay*1000)
        })(items[i],i)
    }
}

var myItems = [
    {
        name: 'shovel',
        delay: 1
    },
    {
        name: 'shoe',
        delay: 3
    },
    {
        name: 'newspaper',
        delay: 5
    }
];

printItems(myItems);

//Oppgave 4

function repeatString(str, n, callback){
    var resultStr = str.repeat(n);
    callback (resultStr);
}

repeatString('ha', 3, function (result) {
    console.log(result); // => hahaha
});

//Oppgave 5

function compress(input, callback) {
    setTimeout(function () {
        callback(null, input.slice(0, 3));
    }, 100);
}

function encrypt(input, callback) {
    setTimeout(function () {
        callback(null, input.reverse());
    }, 100);
}

compress("the secret key is 123543",function(err, result){
    if(!err){
        encrypt(result.split(''), function(err, result){
            if(!err){
                console.log(result.join(''))
            }
        })
    }
})

/*Jeg tolket oppgaven slik at jeg skulle endre de opprinnelige funksjonene slik at de returnerte
et promise, som deretter kunne chaines. Et alternativ hadde vært å beholde funskjonene slik de 
var og lage en funksjon som "promisified" dem.*/

function compress(input) {
    return new Promise(function(resolve, reject) {
        if(input==undefined){
            reject(new Error('Empty input'))
        }
        
        setTimeout(function () {
            resolve(input.slice(0, 3));
        }, 100);
    });
};

function encrypt(input) {
    return new Promise(function(resolve, reject) {
        if(!input){
            reject(new Error('Empty input'))
        }
        setTimeout(function () {
            resolve(input.split('').reverse().join(''));
        }, 100);
    });
};

var a;
var prosessAsync = compress(a)
.then(encrypt)
.then(console.log)
.catch(console.log);
