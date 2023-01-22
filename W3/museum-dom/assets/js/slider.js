const prev = document.getElementById('left');
const next = document.getElementById('rigth');
const count = document.getElementById('count');
const slides = document.querySelectorAll('.slider_el');
const square = document.querySelectorAll('.slide');

 let index = 0;

  function activeSlide(n){
    for(slider_el of slides)
    {   
        
        slider_el.classList.remove('active');
    }
        count.innerHTML = "0" + (n+1);
        slides[n].classList.add('active');
    }

    function activeSquare(n){
        for(slide of square)
        {   
            slide.classList.remove('active');
        }
        count.innerHTML = "0" + (n+1);
        square[n].classList.add('active');
        }
   
    function nextSlide()
    {
        if(index === slides.length - 1)
        {      
            
            index = 0 ;
            activeSlide(index);
            activeSquare(index);
        }
        else {
            
            index++;
            activeSlide(index);
            activeSquare(index);
        }

    }
    function prevSlide()
    {
        if(index === 0)
        {   
            index =  slides.length - 1;
            activeSlide(index);
            activeSquare(index);
        }
        else {
           
            index--;
            activeSlide(index);
            activeSquare(index);
        }

    }


    square.forEach((item,indexSquare)=>
    {
        item.addEventListener('click', () =>{
            index = indexSquare;
            activeSlide(index);
            activeSquare(index);
        })
    })
    next.addEventListener('click', nextSlide);
    prev.addEventListener('click', prevSlide);
   
    const swipedetect = (el) => {
        let surface = el;
        let startX = 0;
        let startY = 0;
        let distX = 0;
        let distY = 0;
        
        let startTime = 0;
        let elapsedTime = 0;
    
        let threshold = 150;
        let restraint = 100;
        let allowedTime = 300;
    
        surface.addEventListener('mousedown', function(e){
            startX = e.pageX;
            startY = e.pageY;
            startTime = new Date().getTime();
            e.preventDefault();
        })
        
        surface.addEventListener('mouseup', function(e){
            distX = e.pageX - startX;
            distY = e.pageY - startY;
            elapsedTime = new Date().getTime() - startTime;
            if (elapsedTime <= allowedTime) {
                if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){
                    if(distX > 0) { 
                        prevSlide();
                    } else {
                        nextSlide();
                    }
                }
            }
            e.preventDefault();
        })
    }
    
    let el = document.querySelector('.background_slider');
    swipedetect(el);