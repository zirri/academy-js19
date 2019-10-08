function makeFruitObject (fruitName, fruitPrice){
    let fruit = {
        name: fruitName,
        price: fruitPrice
    };
    return fruit
};

function compareFruits(){
    const fruit1 = makeFruitObject(document.getElementById('fruit1').value,document.getElementById('fruit1Price').value);
    const fruit2 = makeFruitObject(document.getElementById('fruit2').value,document.getElementById('fruit2Price').value);
    const fruit3 = makeFruitObject(document.getElementById('fruit3').value,document.getElementById('fruit3Price').value);

    let fruits = [fruit1, fruit2, fruit3];

    fruits.sort(function (a, b) {
        return a.price - b.price;
    });

    alert(`Dagens fruktsalat består av: ${fruit1.name}, ${fruit2.name} og ${fruit3.name}.  
        \n Dyreste ingrediens er: ${fruits[2].name}, som koster ${fruits[2].price}
        \n Billigste ingrediens er: ${fruits[0].name}, som koster ${fruits[0].price}`);
return false;   
};