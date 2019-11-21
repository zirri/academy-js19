let boardNode = document.querySelector('#board');
let buttonNode = document.querySelector('button');
let counter = 0;

function checkWin(){
};

function clearBoard(){
  console.log('reset')
  let squares = document.querySelectorAll('.square');
  console.log(squares)
  squares.forEach(item =>{
    item.innerHTML = '';
    item.setAttribute('class',`square`);
  })
};

boardNode.addEventListener('click', event =>{
  let clickedSquare = event.target;
  console.log(clickedSquare.getAttribute('class') == 'valueSet square');
  if(!(clickedSquare.getAttribute('class') == 'valueSet square')){
    counter++;
    let insertvalue = '';
    if((counter%2) == 1){
      insertvalue = 'x';
    }else{
      insertvalue = 'o';
    }
    let newMark = document.createTextNode(insertvalue);
    clickedSquare.appendChild(newMark);
    clickedSquare.setAttribute('class','valueSet square');
  };

})

buttonNode.addEventListener('click', event => {
  clearBoard();
})

