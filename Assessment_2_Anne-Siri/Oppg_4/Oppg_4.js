//OPPGAVE 4A

let mainNode = document.querySelector('#main');

function makeChild(tag, content, parent, AttrClass){
    let newNode = document.createElement(tag);
    if(content){
        let contentText = document.createTextNode(content);
        newNode.appendChild(contentText);
    }
    if(AttrClass){
        newNode.setAttribute('class', AttrClass);
    }
    parent.appendChild(newNode);
    return newNode
};

let h1Node = makeChild('h1', 'My Favorite Guitars',mainNode,'');
let ulNode = makeChild('ul', '',mainNode,'');
let liNode1 = makeChild('li', 'Gibson Hummingbird',ulNode,'guitar');
let liNode2 = makeChild('li', 'Fender Telecaster',ulNode,'guitar');
let liNode3 = makeChild('li', 'Gretsch Rancher',ulNode,'guitar');


//OPPGAVE 4B
ulNode.addEventListener('click', event =>{
    let elementClicked = event.target;
    elementClicked.style.color = 'green';
})