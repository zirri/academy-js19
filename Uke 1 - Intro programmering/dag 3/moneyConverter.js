function convertCurrency(){
    var fromCurrency = document.getElementById("fromCurrency");
    fromCurrency = fromCurrency.options[fromCurrency.selectedIndex].value;

    var toCurrency = document.getElementById("toCurrency");
    toCurrency = toCurrency.options[toCurrency.selectedIndex].value;

    var inputAmount = +document.getElementById("inputAmount").value;

    var rateNOKtoSEK = 1.2;
    var rateNOKtoDKK = 0.9;

    var rates = {
        NOK: {
            NOK: 1,
            SEK: rateNOKtoSEK,
            DKK: rateNOKtoDKK
        },
        SEK: {
            NOK: 1/rateNOKtoSEK,
            SEK: 1,
            DKK: rateNOKtoDKK/rateNOKtoSEK
        },
        DKK:{
            NOK: 1/rateNOKtoSEK,
            SEK: rateNOKtoSEK/rateNOKtoDKK,
            DKK: 1
        }
    }

    var rate = rates[fromCurrency][toCurrency];
    resultAmount = inputAmount * rate;
    document.getElementById("result").innerHTML = '<br>'+inputAmount+' '+fromCurrency+" equals " +resultAmount+' '+toCurrency;
}


