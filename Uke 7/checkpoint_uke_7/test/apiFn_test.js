const assert = require('chai').assert;
const apiFn = require('../src/apiFunctions');

describe('Testing API functions', ()=>{
    describe('Testing readFromFile()',()=>{
        it('gives object', () => {
            assert.isArray(apiFn.readFromFile('./src/cars.json'));
        });
        it('should throw error on invalid path', () => {
            assert.throws(() => {
                apiFn.readFromFile('./cars123.json');
            })
        });
    });

    describe('Testing checkRangeFormat()', ()=>{
        it('should return {error: null} on num between 0 and 10000', ()=>{
            assert.isObject(apiFn.checkRangeFormat(123));
            assert.isNull(apiFn.checkRangeFormat(123).error);
        })
        it('should return {error: <message>} on not number', ()=>{
            assert.equal(apiFn.checkRangeFormat('abc').error, 'Invalid input. Range is not a number');
            assert.equal(apiFn.checkRangeFormat().error, 'Invalid input. Range is not a number');
            assert.equal(apiFn.checkRangeFormat({a:'b'}).error, 'Invalid input. Range is not a number');
            assert.equal(apiFn.checkRangeFormat([1,2,4]).error, 'Invalid input. Range is not a number');  
            assert.equal(apiFn.checkRangeFormat([]).error, 'Invalid input. Range is not a number');       
        });
        it('should return {error: <message>} on num outside range 0 and 10000', ()=>{
            assert.equal(apiFn.checkRangeFormat(-1).error, 'Range should be 0<minRange<10000');
            assert.equal(apiFn.checkRangeFormat(100000).error, 'Range should be 0<minRange<10000');
        })
    
    });
    describe('Testing getCarsWithFeature()', ()=>{
        const testInput = [{
            "make": "Tesla",
            "model": "Cybertruck",
            "features": ["4wd", "fast-charge", "700km", "4-door"]
        },
        {
            "make": "VW",
            "model": "ID 3",
            "features": ["2wd", "fast-charge", "300km", "5-door"]
        }];
        it('should return object with cars on valid features', ()=>{
            assert.isArray(apiFn.getCarsWithFeature(testInput, '2wd'));
        })
        it('should return [] on invalid feature', ()=>{
            assert.isArray(apiFn.getCarsWithFeature(testInput, 'bogus'));
            assert.equal(apiFn.getCarsWithFeature(testInput, 'bogus').length, 0);
            assert.equal(apiFn.getCarsWithFeature(testInput).length, 0);
        });
        it('should throw error on invalid input-array', ()=>{
            assert.throws(() => {apiFn.getCarsWithFeature('abc', 'bogus')}, 'allCars.filter is not a function');
            assert.throws(() => {apiFn.getCarsWithFeature({}, 'bogus')}, 'allCars.filter is not a function');
            assert.throws(() => {apiFn.getCarsWithFeature(undefined, 'bogus')}, "Cannot read property 'filter' of undefined");
        });
    });
});