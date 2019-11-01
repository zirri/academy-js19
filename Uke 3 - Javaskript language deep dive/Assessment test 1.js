import { loadavg } from "os";

//Assessment test 1
//Anne-Siri Borander

//Oppgave 1-1

Javascript er null-indeksert og "return words[2]" vil derfor 
returnere det tredje ordet og ikke det andre.

Fungerende kode:
function getSecondWord(stringOfWords) {
    var words = stringOfWords.split(' ');
    return words[1];
}

//Test:
console.log(getSecondWord('hello my good friend'));

//Oppgave 1-2

function extendString(str){
    if(str.length<5){
        return str;
    }else if(str.length<10){
        return str+"!!!!";
    }else{
        return str+"????";
    };
};

//Test:
console.log(extendString('hi'));
console.log(extendString('howdy'));
console.log(extendString('good morning'));

//Oppgave 1-3

function padString(str, pad, len) {
    var padStr = "";
    for(var i=0; i<len;i++){
        padStr += pad;
    }
    return padStr+str;
};

//Test:
console.log(padString('Welcome to the party!', 'A', 10));
console.log(padString('Pants are overrated', 'oO', 2));
console.log(padString('Pants are overrated', '', 100));
console.log(padString('Pants are overrated', 'abcde', 0));

//Oppgave 1-4

function printRange(n,m){
    for (var i=0; i<=m-n;i++){
        for(var j=n; j<=m;j++){
            console.log(j);
        }
    }
}

//Test:
console.log(printRange(0, 1));
console.log(printRange(1, 3));
console.log(printRange(9, 11));

//Oppgave 1-5

function repFavoriteWord(){
    var favoriteWord = prompt('What is your favorite word?');
    var rep = +prompt('How many times do you want me to repeat it?');
    if(!rep || !favoriteWord){
        alert('Not valid input! Either you did not enter anything as \
        your favorite word or you did not enter a Number.')
        return;
    }
    var resultArr=[];
    for(var i=0; i<rep; i++){
        resultArr.push(favoriteWord);
    }
    alert(resultArr.join(", ")+"!");
}

//Test:
repFavoriteWord();

//Oppgave 2-1:
\<div> er en generisk blokk som ikke sier noe om innholdet og kan brukes
hvor som helst på nettsiden. En <article> er en symantisk tag som også
sier også noe om innholdet i blokken. For å gjøre siden bedre for 
skjermlesere og søk (google etc.) bør man bruke slike tager for å 
fortelle noe om innhold og struktur på siden. Den største likheten er at 
begge er blokk-tager som kan brukes til å ordne/formattere deler av en side. 
Ulikheten går hovedsakelig på at en <div> kan brukes hvor som helst, mens 
\<article> bør ikke brukes der det ikke er en artikkel eller annet lignende 
innhold.

//Oppgave 2-2

//CSS:
<style>
    p a{
        color: orange;
    }
</style>


//Oppgave 2-3
Her vil jeg trekke fram flexbox og grid. For flexbox definerer man området,
deretter hvilken retning elementene skal flyte, hvordan de skal plassere
seg i forhold til de andre elementene. I grid definerer man et rutenett 
og plasserer elementer inn i rutenettet. Her kan også elementene fylles 
opp automatisk, men de vil alltid forholde seg til det underliggende 
rutenettet. Det jeg har erfart så langt er at de best til ulik bruk. Jeg 
synes grid er enklere om man ønsker elementer med samme størrelse og en 
"ryddighet" langs begge akser. Om man ønsker å "fylle på" fortløpende synes
jeg flexbox er enklere. F.eks. ville jeg brukt flexbox om jeg skulle laget
pinterest.com, mens jeg kanskje ville tenkt grid om jeg skulle lage en
nettavis eller nrk.no.

I CSS-grid kan man bruke enheten 1fr (står for "fraction"). Det denne gjør
er at den tar ledig plass og deler opp i det antall fraksjoner man har
definert totalt. Deretter tildeles en fraksjon delen av plassen som blir
per fraksjon. Dette gjør det lett å si at noe skal "fordele seg jevnt ut
over tilgjengelig plass".

//Oppgave 2-4
En transition lager en dynamisk overgang fra en "state" til en annen "state". Det
går an å definere ulike overganger, men den kan ikke gjøre mye "krumspring"
på veien. En animasjon har derimot en trigger-hendelse, men derfra kan 
hva som helst skje. Her er det mulig å gjøre masse "krumspring", samt at
man kan ha samme "state" før og etter.

Keyframes gjør det mulig å definere steg og rekkefølge i en animasjon, samt
når de ulike stegene skal skje og hvor lang tid de skal ta.

//Oppgave 3-1
Det er 5 primive typer i Javascript EC5.
String
    Eksempel: var str = "I am a string"
Number
    Eksempel: var num = 4;
Boolean
    Eksempel: var boolValue = true;
undefined
    Eksempel: var undefinedValue;
null
    Eksempel: var nullValue = null;

I tillegg ser det ut til at det ble introdusert to nye primitive 
typer i EC6 som vi ikke har jobbet med ennå: Symbol og Bigint.

//Oppgave 3-2
Det finnes 6 falsy verdier i javascript:
false
undefined
null
""
0
NaN

Dersom man skal evaluere "truthy" eller "falsy" er det så enkelt at
dersom det ikke er falsy, så er det truthy. Det aller meste 
javascript er enten truthy eller falsy (selv om selve uttrykket kan 
evaluere til noe helt annet). Det gjør at man kan bruke et uttrykk
som ikke nødvendigvis evaluerer til true eller false i f.eks. if og 
løkker. Da vil man i stedet se på om uttrykket er falsy/truthy og
håndtere det deretter.

//Oppgave 3-3

Probelemet har ligger i at prompt lagrer det den får tilbake som en 
string. Og når man legger sammen to stringer vil man sette sammen 
stringene "etter hverandre". For å kunne summere må vi derfor definere 
at vi ønsker at inputen lagres som number. Dette kan man gjøre ved å 
legge inn en "+" foran verdien man legger inn i variabelen.

Fungerende kode:
function addNumbers() {
    var a = +prompt('First number');
    var b = +prompt('Second number');
    var result = a + b;
    console.log(result);
}

//Test:
addNumbers();

//Oppgave 3-4
=== sammenligner om begge argumentene er like, inkludert type (den 
typecaster ikke). Tallet 4 og stringen "4" vil derfor bli false
om man sammenligner med ===. Alternativet == vil derimot prøve å
endre type slik at argumentene blir mulig å sammenligne. I eksempelet
over vil stringen "4" da blitt gjort om til et number automatisk og
"4"==4 vil dermed bli true.

//Oppgave 3-5

function getProperties(o){
    var propArray=[];
    for(prop in o){
        propArray.push(prop);
    }
    return propArray;
}

//Test:
var house = {
    address: "7 Mulholland Dr.",
    zipCode: "90210 Beverly Hills",
    size: "23945 sqft.",
    price: "23 million $",
}

console.log(getProperties(house));

//Oppgave 3-6

function getPropertyPairs(obj){
    var propArray=[];
    for(prop in obj){
        propArray.push([prop, obj[prop]]);
    }
    return propArray;
}

//Test:
var obj = {
    a: 10,
    b: 20,
    c: 30
  }

console.log(getPropertyPairs(obj));


//Oppgave 3-7
Man har glemt å henvise til this for parametrene brukt inne i 
getLifeStory. Uten this vil den lete etter variabler som heter
'name', 'occupation' og 'hobby' (utenfor objektet).

//Fungerende kode:

var person = {
    name: "Rick",
    occupation: "crazy scientist",
    hobby: "make a mess",
    getLifeStory: function () {
        return this.name + " is a " + this.occupation + " and likes to " + this.hobby;
    }
};

//Test:
console.log(person.getLifeStory());

//Oppgave 3-8
var getStory = person.getLifeStory;
getStory();

Denne koden vil ikke fungere siden getLifeStory (metoden i person-objektet)
henviser til this. Når man prøver å kalle funksjonen som bare getStory() 
så kalles ikke denne på noe objekt og når den prøver å sette inn this.name
vil den enten være undefined eller window.name og derfor ikke gi ønsket/gyldig
resultat. Man kan komme rundt dette på flere måter. Det mest naturlige her 
er vel at man alltid ønsker at getStory() skal printe ut historien til objektet
person. Da kan man binde funksjonen til person-objektet.

Da blir koden slik:
var getStory = person.getLifeStory.bind(person);
console.log(getStory());
