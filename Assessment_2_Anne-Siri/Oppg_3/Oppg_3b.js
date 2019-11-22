// OPPGAVE 3B

/*Closure handler om at variabler og funksjoner lever "inne i ulike rom" og kan
ikke nås utenfra. For "var" gjelder det at variabler inne i funksjoner ikke er 
tilgjengelig fra utsiden, mens for "let" og "const" gjelder det også for f.eks. if
og løkker i tillegg. En closure blir dermed på en måte det rommet en variabel
er tilgjengelig fra.*/

//Eksempel på closure:

var a = 10;
function makePrinter() {
    var b = 20;
    function actuallyPrint() {
        console.log(a, b);
    }
    return actuallyPrint;
}
var print = makePrinter();
print();

console.log(a); //=> 10
console.log(b); //=> ReferenceError: b is not defined
console.log(actuallyPrint); //=> ReferenceError: actuallyPrint is not defined

/*I eksempelet vil variabelen b og funksjonen actuallyPrint ikke være tilgjengelig
utenfor funksjonen makePrinter. Variabelen a er derimot deklarert utenfor funksjonen
og vil derfor være tilgjengelig i ettertid.*/
