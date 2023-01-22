const toggle = document.getElementById('toggle');
const menu = document.getElementById('hamburger_menu');
const welcome__btn = document.getElementById('welcome__btn');
const welcome__text = document.getElementById('welcome__text');
const welcome__title = document.getElementById('welcome__title');
const background_slider = document.getElementById('background_slider');
const main = document.querySelector('main');
const links = document.querySelector('nav_menu')
let c = 0;

let MaxWin = 0;

toggle.onclick = function() {
    menu.style.display = "block";
    if(c == 0 )
    {
        MaxWin = window.screen.width;
        welcome__btn.style.display = "none";
        welcome__text.style.display = "none";
        welcome__title.style.display = "none";
        toggle.classList.add('active');
        c += 1;
        if(MaxWin<=768){
            background_slider.style.display = "none"
        }
        if(MaxWin<=420)
        {
            
        }
        
    }
    else 
    {
        welcome__btn.style.display = "block";
        welcome__text.style.display = "block";
        welcome__title.style.display = "block";
        menu.style.display = "none";
        toggle.classList.remove('active');
        c -= 1;
        background_slider.style.display = "block"
    }
    
  }

  main.addEventListener('click', function(e) {
    if(e.target.id !== 'toggle' && e.target.id !== 'hamburger_menu'){
        welcome__btn.style.display = "block";
        welcome__text.style.display = "block";
        welcome__title.style.display = "block";
        menu.style.display = "none";
        toggle.classList.remove('active');
        background_slider.style.display = "block"
    }
});
