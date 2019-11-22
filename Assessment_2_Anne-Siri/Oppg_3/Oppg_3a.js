// Oppgave 3a

/*bind: Når man kaller en funksjon med bind så bytter man
ut alle "this" inne i funksjonen med det objektet som er
angitt som argument i bind.

apply: Når man kaller en funksjon med apply så angir man 
hvilket objekt som skal være "this" inne i funksjonen, og
samtidig gir man alle argumentene som et array. Man kan 
dermed overstyre hva som er "this".

call: Ligner veldig på apply, men man gir argumenter som
komma-separerte verider i stedet for som i et array.*/

//Eksempler på bruk:
let personSiri = {   
};
let personAnne = {
    name: "Anne",
    age: 30,
    setPerson(name,age){
        this.name = name;
        this.age = age;
    },
}

//Denne linjen vil gjøre at også personSiri får setPerson-funksjonen
personSiri.setPerson = personAnne.setPerson;

//Selv om fuksjonen kalles på objektet personSiri så er det personAnne som endres
//siden vi bruker call:
personSiri.setPerson.call(personAnne,"test", 4);
console.log("personSiri: ", personSiri);
console.log("personAnne: ", personAnne);
//=> personSiri: { setPerson: [Function: setPerson] }
//=> personAnne: { name: 'test', age: 4, setPerson: [Function: setPerson] }

//Her er det motsatt; selv om personAnne kaller funksjonen vil det være personSiri
//som endres siden vi bruker apply:
personAnne.setPerson.apply(personSiri,["tull", 80]);
console.log("personSiri: ", personSiri);
console.log("personAnne: ", personAnne);
//=> personSiri: { setPerson: [Function: setPerson], name: 'tull', age: 80 }
//=> personAnne: { name: 'test', age: 4, setPerson: [Function: setPerson] }

//Når personAnne.setPerson bindes til å peke på personSiri-objektet og man
//trenger f.eks ikke lenger å kalle funksjonen på et objekt for å få resultat:
let changePerson = personAnne.setPerson.bind(personSiri);
changePerson("Obama", 60);
console.log("personSiri: ", personSiri);
console.log("personAnne: ", personAnne);
//=> personSiri: { setPerson: [Function: setPerson], name: 'Obama', age: 60 }
//=> personAnne: { name: 'test', age: 4, setPerson: [Function: setPerson] }