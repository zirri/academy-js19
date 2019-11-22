//OPPGAVE 2

const families = [
    {
      mother: 'Marge',
      father: 'Homer',
      children: [
        'Bart',
        'Lisa',
        'Maggie'
      ]
    },
    {
      mother: 'Lois',
      father: 'Peter',
      children: [
        'Chris',
        'Meg',
        'Stewie'
      ]
    },
    {
      mother: 'Beth',
      father: 'Jerry',
      children: [
        'Summer',
        'Morty'
      ]
    }
];

//Get mothers
let mothers = [];
families.forEach(family => {
    if(family.children.length>2){
        mothers.push(family.mother);
    } 
})

//test
console.log(mothers)

//Get total number children
let amountChildren = families.reduce((sum, family) =>{
    return sum+=family.children.length
},0)

//test
console.log(amountChildren)

let firstChild = families.map(family => {
    return family.children[0];
})

//test
console.log(firstChild)