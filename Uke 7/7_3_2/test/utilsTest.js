const assert = require('chai').assert;
const utils = require('../utils');

describe('utils', ()=>{
    describe('Testing add()',()=>{
        it('should return sum', () => {
            assert.equal(utils.add(1,2), 3);
            assert.equal(utils.add(-1,1), 0);
            assert.equal(utils.add(1000,2), 1002);
        });
        it('should throw error on not number', () => {
            assert.throws(() => utils.add([],4), 'Input type not valid');
            assert.throws(() => utils.add({},4), 'Input type not valid');
            assert.throws(() => utils.add("4",4), 'Input type not valid');
            assert.throws(() => utils.add(), 'Input type not valid');
        });
    });

    describe('Testing sub()',()=>{
        it('should return sum', () => {
            assert.equal(utils.sub(1,2), -1);
            assert.equal(utils.sub(1,-1), 2);
            assert.equal(utils.sub(1000,2), 998);
        });
        it('should throw error on not number', () => {
            assert.throws(() => utils.sub([],4), 'Input type not valid');
            assert.throws(() => utils.sub({},4), 'Input type not valid');
            assert.throws(() => utils.sub("4",4), 'Input type not valid');
            assert.throws(() => utils.sub(), 'Input type not valid');
        });
    });

    describe('Testing resverseString()',()=>{
        it('should return string in reverse', () => {
            assert.equal(utils.reverseString('hei'), 'ieh');
            assert.equal(utils.reverseString('HALLO'), 'OLLAH');
            assert.equal(utils.reverseString('Hei på deg 12'), '21 ged åp ieH');
        });
        it('should be case sensitive', () => {
            assert.notEqual(utils.reverseString('hello'), 'OLLEH');
            assert.notEqual(utils.reverseString('Hello'), 'OlleH');
        });
        it('should throw error on invalid input', () => {
            assert.throws(() => utils.reverseString(4), 'Invalid input type');
            assert.throws(() => utils.reverseString('test','test'), 'Accepts only one argument');
        });
    });

    describe('Testing timeout()',()=>{
        it('return done after delay', (done) => {
            utils.timeout(500,(input) => {
                assert.equal(input, 'done');
                done();
            });       
        });

        it('return not done after delay', (done) => {
            utils.timeout(500,(input) => {
                assert.notEqual(input, 'not result');
                done();
            });       
        });

        it('should throw error on invalid input', () => {
            assert.throws(() => utils.reverseString(), 'Invalid input type');
        });
    });
});