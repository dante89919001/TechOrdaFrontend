const btn = document.createElement('button');
document.querySelector('body').appendChild(btn);
btn.id = 'btn';
btn.className = 'btnClass';
let num  = 0 ;
btn.innerHTML = num;

btn.addEventListener('click',()=>{
    num = num+1;
    btn.innerHTML = num;
})