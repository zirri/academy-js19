
/**
 * Function that adds two numbers
 * @param {number} a
 * @param {number} b
 */
function add(a, b) {
    if(typeof a !== 'number' || typeof b !== 'number'){
        throw new Error('Input type not valid')
    }
    return a + b;
}

/**
 * Function that substracts b from a
 * @param {number} a 
 * @param {number} b 
 */
function sub(a, b) {
    if(typeof a !== 'number' || typeof b !== 'number'){
        throw new Error('Input type not valid')
    }
    return a - b;
}

/**
 * Function that reverses a string
 * @param {string} str 
 */
function reverseString(str) {
    if(typeof str !== 'string'){
        throw new Error('Invalid input type')
    }
    if(arguments.length >1){
        throw new Error('Accepts only one argument')
    }
    let strArr = str.split('');
    let reverseStrArr = strArr.reverse();
    return reverseStrArr.join('');
}

/**
 * Function that calls a callback after a given amount of time.
 * @param {number} timeMs time in ms
 * @param {function} callback 
 */
function timeout(timeMs, callback) {
    if(typeof timeMs !== 'number' || typeof callback !== 'function'){
        throw new Error('Input type not valid');
    }
    setTimeout(() => {
        callback('done')
    }, timeMs)
}

module.exports = {
    add,
    sub,
    reverseString,
    timeout
};