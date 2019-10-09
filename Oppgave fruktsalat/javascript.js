function makeFruitObject (fruitName, fruitPrice){
    let fruit = {
        name: fruitName,
        price: fruitPrice
    };
    return fruit
};

function compareFruits(){
    let fruits = [];
    //lage en while-loop i stedet?
    for (let i = 1; i<=5; i++){ 
        if(document.getElementById('fruit'+i).value != ''){
            if(document.getElementById('fruit'+i+'Price').value > 0){
                fruits.push(makeFruitObject(document.getElementById('fruit'+i).value,document.getElementById('fruit'+i+'Price').value));
            }else{
                alert('Frukt uten pris blir ikke evaluert');
            }
        }
    }  

    fruits.sort(function (a, b) {
        return a.price - b.price;
    });

    alert(`Dyreste ingrediens er: ${fruits[fruits.length-1].name}, som koster ${fruits[fruits.length-1].price}
        \n Billigste ingrediens er: ${fruits[0].name}, som koster ${fruits[0].price}`);
return false;   
};