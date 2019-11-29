const assert = require('chai').assert;
const grades = require('../grades');
//No need to require mocha

//the strings as first argument output when running tests
describe('grades', ()=>{
    describe('foo',()=>{
        it('should return bar', () => {
            let foo = grades.foo();
            assert.equal(foo, 'bar');
        })
    });

    describe('add',()=>{
        //Happy path testing
        it('should return sum', () => {
            let result = grades.add(1,2);
            assert.equal(result, 3);

            result = grades.add(10,12);
            assert.equal(result, 22);

            result = grades.add(-1,1);
            assert.equal(result, 0);
        });
        //should fail
        it('should throw error on not number', () => {
            assert.throws(
                ()=> grades.add(true, false),'Parameter is not a number'
            );
            assert.throws(
                ()=> grades.add([],1),'Parameter is not a number'
            );
            assert.throws(
                ()=> grades.add(),'Parameter is not a number'
            );
        })
    });
});