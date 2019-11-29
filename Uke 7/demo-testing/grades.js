const grade = [
    {
        A: "very good",
        B: "Desent"
    }
]

function grades(){
    return grade[0];
}

function foo(){
    return 'bar';
}

function add (n,m){
    if(typeof n !== 'number' || typeof m !== 'number'){
        throw new Error('Parameter is not a number');
    }
    return m+n;
}

module.exports = {
    grades,
    foo,
    add
};