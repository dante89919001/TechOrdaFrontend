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
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let regVowels = /[aeiouy]/;

    let resV = '';
    let resC = '';
    let result = '';
 
    for(let i = 0 ; i < s.length; i++){
        if(regVowels.exec(s[i])){
            resV+= s[i];
        }else{
              resC+= s[i];
            
        }
      
    }
    result = resV + resC;
     for(let i = 0 ; i < result.length; i++){
        
        console.log(result[i]);
      
    }
}

