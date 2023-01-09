let firstNum = '',
secondNum = '',
sign = '',
finish = false;


const buttons = document.querySelectorAll('.btn');

const out = document.querySelector('.calc-screen p');

let reg = /[+*/-]/; 

console.log(buttons);

function clearAll() {
    firstNum = '';
    secondNum = '';
    sign= '';
    finish = false;
    out.textContent = 0;
}


buttons.forEach((el)=>{
        el.addEventListener('click', (event) =>{
            
            out.textContent = '';
            const key = event.target.innerHTML;

            if((key >= '0' && key <= '9') || key == '.'){
                
                
                if(firstNum != '' && sign != ''){
                    if(key == '.' && secondNum.indexOf('.') == -1){
                        secondNum += key;
                        out.textContent = secondNum;
                    }else if(key != '.'){
                        secondNum += key;
                        out.textContent = secondNum;
                    }else{
                        out.textContent = secondNum;
                    }
                   
                }else if(firstNum!= '' && secondNum!='' && finish){
                    if(key == '.' && secondNum.indexOf('.') == -1){
                        secondNum +=key;
                        finish = false;
                        out.textContent = secondNum;
                    }else if(key != '.'){
                        secondNum +=key;
                        finish = false;
                        out.textContent = secondNum;
                    }else{
                        out.textContent = secondNum;
                    }
                  
                }else{
                    if(key == '.' && firstNum.indexOf('.') == -1){
                        firstNum +=key;
                        finish = false;
                        out.textContent = firstNum;
                    }else if(key != '.'){
                        firstNum +=key;
                        finish = false;
                        out.textContent = firstNum;
                    }else{
                        out.textContent = firstNum;
                    }
                }

               
            }
        if( reg.exec(key) && key != '='){
                sign = key;
                out.textContent = sign;

            }

            if(event.target.innerHTML =='ac'){
                clearAll();
            }

         

            if(event.target.innerHTML == "=" && firstNum ){
                switch (sign) {
                   
                    case "+":
                        firstNum = (+firstNum) +(+secondNum);
                        break;
                    case "-":
                        firstNum = (+firstNum) -(+secondNum);
                        break;
                    case "*":
                        firstNum = (+firstNum) *(+secondNum);
                        break;
                    case "/":
                        if(secondNum == '0'){
                            clearAll();
                            out.textContent = 'Ошибка';
                            return;
                        }
                        firstNum = (+firstNum) / (+secondNum);
                        break;
                
                }
                finish = true;
                secondNum = '';
                out.textContent = firstNum;
            }else if(event.target.innerHTML == "=" && firstNum && !secondNum){
                out.textContent = firstNum;

            }else if(event.target.innerHTML == "=" && !firstNum && !secondNum){
                out.textContent = 0;
            }
            
           console.log(firstNum , secondNum , sign);
        })
})

