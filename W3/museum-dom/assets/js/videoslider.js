const prevs = document.getElementById('left-arrow-video');
const nexts = document.getElementById('rigth-arrow-video');
const videosliders = document.querySelectorAll('.iframe');
const dots = document.querySelectorAll('.dot');
const video = document.getElementById('video_img');

 let indexDot = 0;

 if (window.matchMedia("(max-width: 768px)").matches) {
    function activeSlides(n){
    for(iframe of videosliders)
    {   
        
        iframe.classList.remove('active');
    }
    if(n<1)
    {
        n=1;
    }
    video.setAttribute("src", "./assets/video/video" + indexDot +".mp4");
    video.setAttribute("poster", "./assets/video/" + indexDot +".jpg")
    
    buttonPlay.setAttribute("src", "./assets/img/Player/Play.png");
     for(let i = n-1; i <= n; i++)
     {
      
         videosliders[i].classList.add('active');
     }   
        
    }
  } else {
    function activeSlides(n){
        for(iframe of videosliders)
        {   
            iframe.classList.remove('active');
            iframe.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
        }

        if(n<2)
        {
            n=2;
        }
        
        video.setAttribute("src", "./assets/video/video" + indexDot +".mp4");
        video.setAttribute("poster", "./assets/video/" + indexDot +".jpg")
        buttonPlay.setAttribute("src", "./assets/img/Player/Play.png");
        progress.value = 0;
         for(let i = n-2; i <= n; i++)
         {
            
             videosliders[i].classList.add('active');

         }   
            
        }
  }

 
    function activedot(n){
        for(dot of dots)
        {   
            dot.classList.remove('active');
        }
        
        dots[n].classList.add('active');
        }
   
    function nextDot()
    {
        if(indexDot === dots.length - 1)
        {      
            
            indexDot = 0 ;
            activeSlides(indexDot);
            activedot(indexDot);
        }
        else {
            
            indexDot++;
            activeSlides(indexDot);
            activedot(indexDot);
        }

    }
    function prevDot()
    {
        if(indexDot === 0)
        {   
            indexDot =  dots.length - 1;
            activeSlides(indexDot);
            activedot(indexDot);
        }
        else {
           
            indexDot--;
            activeSlides(indexDot);
            activedot(indexDot);
        }

    }


    dots.forEach((item,indexdots)=>
    {
        item.addEventListener('click', () =>{
            indexDot = indexdots;
            activeSlides(indexDot);
            activedot(indexDot);
        })
    })
    nexts.addEventListener('click', nextDot);
    prevs.addEventListener('click', prevDot);
    