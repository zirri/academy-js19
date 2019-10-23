function sumArray(arr){
    if (arr.length==1){
        return arr[0];
    }else{
        var temp = arr[arr.length-1];
        arr.pop();
        arr[arr.length-1] += temp;
        return sumArray(arr);
    }
    
}
var i = 0;
console.log(sumArray([1,2,3,4,5,6,7,8,9]))