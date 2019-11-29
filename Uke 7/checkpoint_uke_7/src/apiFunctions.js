const fs = require('fs');

function readFromFile(filename){
    const allCarsJson = fs.readFileSync(filename);
    const allCars = JSON.parse(allCarsJson);
    return allCars;
}

function checkRangeFormat(range){
    if(!(/^\-*[0-9]+$/.test(range))){
        return {error:'Invalid input. Range is not a number'};
    }
    if(+range<0 || +range > 10000){
        return {error:'Range should be 0<minRange<10000'};
    }
    return {error:null};
};

function checkValidRange(minRange,maxRange){
    if(minRange > maxRange){
        return {error:'Maximum range should larger than minimum range'};
    }
    return {error:null};
}

function getCarsWithFeature(allCars, feature){
    return allCars.filter(car => {
        return car.features.includes(feature);
    });
}

function getCarsWithRange(allCars, minRange=0, maxRange=Infinity){
    return allCars.filter(car => {
        let index = car.features.findIndex(feature => /(km)$/.test(feature))
        let carRange= car.features[index].slice(0, -2);
        return (carRange >= minRange && carRange <= maxRange);
    });
}

//exports
module.exports = {
    readFromFile,
    checkRangeFormat,
    checkValidRange,
    getCarsWithFeature,
    getCarsWithRange
}