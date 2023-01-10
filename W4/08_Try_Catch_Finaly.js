'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    
    if(Number.isInteger(s)){
        console.log('s.split is not a function')
        console.log(s)
  
    }else{
          let reverseString = '';
          s = s +'';
    for(let i = s.length-1  ; i >= 0; i--){
        
        reverseString += s[i];
    }
    
    console.log(reverseString);
    }
  
}

