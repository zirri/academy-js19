function makeFruitObject(fruitName, fruitPrice) {
    let fruit = {
        name: fruitName,
        price: fruitPrice
    };
    return fruit
};

function compareFruits() {
    let fruits = [];
    let messageToUser = '';
    //lage en while-loop i stedet?
    for (let i = 1; i <= 5; i++) {
        if (document.getElementById('fruit' + i).value != '') {
            if (document.getElementById('fruit' + i + 'Price').value > 0) {
                fruits.push(makeFruitObject(document.getElementById('fruit' + i).value, document.getElementById('fruit' + i + 'Price').value));
            } else {
                messageToUser = 'Frukt uten gyldig pris er ikke evaluert';
            }
        }
    }

    fruits.sort(function(a, b) {
        if (a.price === b.price) {
            messageToUser = messageToUser.concat('\n Flere frukter har samme pris. Kan være flere som er billigst/dyrest i tillegg til de som vises.')
        }
        return a.price - b.price;
    });

    returnMessage = `Dyreste ingrediens er: ${fruits[fruits.length-1].name}, som koster ${fruits[fruits.length-1].price}
        <br> Billigste ingrediens er: ${fruits[0].name}, som koster ${fruits[0].price}
        <br><br> ${messageToUser}`;

    document.getElementById('resultEvaluation').innerHTML = returnMessage;
    return false
};