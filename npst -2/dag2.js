const string = 'KNO fmwggkymyioån 30å6ø8432æå54710a9æ09a305å7z9829 fmwggkymyioån ngpoo'

let result= '';
for(let i=0; i<string.length;i++){
    if(string.charAt(i) == ' '){
        result += ' ';
    }else{
        let code = string.charCodeAt(i);
        code = code + 5;
        result += String.fromCharCode(code);
    }
    
}

console.log(result);