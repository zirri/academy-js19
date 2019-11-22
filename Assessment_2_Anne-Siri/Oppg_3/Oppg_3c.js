// OPPGAVE 3C

//synkront funksjonskall
console.log(getBatteryLevelSync());

//asynkront funksjonskall med callback

function printResult(err, currentBatteryLevel){
    console.log(currentBatteryLevel);
}

getBatteryLevel(printResult);

//asynkront funksjonskall med promise

getBatteryLevelAsync()
    .then(result => {
        console.log(result);
    });