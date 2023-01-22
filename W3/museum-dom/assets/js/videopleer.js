const buttonPlay = document.querySelector('.player__btn--pl');
const buttonVolume = document.querySelector('.player__btn-volume');
const BlockVideo = document.querySelector('.video');
const display = document.querySelector('.video__player')
let progress = document.getElementById('progress');

let speedcount = 1;
let playcount = 0;
let Fullcount = 0;

buttonPlay.onclick = play;
buttonVolume.onclick = mute;
document.getElementById('volume__bar').onclick = videoVolume;
document.getElementById('full').onclick = videofull;

video.ontimeupdate = progressUpdate;
progress.onclick = videoRewind;



    function play(){
        
        if(playcount == 0)
        {
            video.play();
            playcount = 1;
            buttonPlay.setAttribute("src", "./assets/img/Player/pause.png");
        }
        else{
            video.pause();
            playcount = 0;
        buttonPlay.setAttribute("src", "./assets/img/Player/Play.png");
        }
        
    }
    function mute(){
        if(video.volume === 0)
        {
            video.volume = volume__bar.value/100;
            buttonVolume.setAttribute("src", "./assets/img/Player/volume.png");
        }
        else{
            video.volume = 0;
            buttonVolume.setAttribute("src", "./assets/img/Player/volumenull.png");
        }
    }
    function videoVolume(){
        let v = this.value;
        video.volume = v/100;
        if(this.value == 0 ){
            buttonVolume.setAttribute("src", "./assets/img/Player/volumenull.png");
        }
        else{
            buttonVolume.setAttribute("src", "./assets/img/Player/volume.png");
        }
    }
    function speedUp(){
        video.play();
        if(speedcount < 1)
        {
            speedNormal();
        }
        else{
            video.playbackRate = 2;
            speedcount = 2;
        }
    }
    function speedDown(){
        video.play();
        if(speedcount > 1)
        {
            speedNormal();
        }
        else{
            video.playbackRate = 0.5;
            speedcount = 0.5;
        }   
    }
    function speedNormal(){
        video.play();
        speedcount = 1;
        video.playbackRate = 1;
    }
    function progressUpdate(){
        let d = video.duration;
        let c = video.currentTime;
        progress.style.background = 'linear-gradient(to right, #710707 0%, #710707 ' + progress.value + '%, #fff ' + progress.value + '%, white 100%)'
        progress.value = (100 * c) / d ;
        if(progress.value == 100)
        {
        video.pause();
        playcount = 0;
        buttonPlay.setAttribute("src", "./assets/img/Player/Play.png");
        }

    }
    function videoRewind(){
        progress.style.background = 'linear-gradient(to right, #710707 0%, #710707 ' + progress.value + '%, #fff ' + progress.value + '%, white 100%)'
        let w = this.offsetWidth;
        let o = event.offsetX;
        progress.value = (100 * o) / w ;
        video.pause;
        video.currentTime = video.duration * (o /w);
        video.play;
        if(progress.value == 100)
        {
        video.pause();
        playcount = 0;
        buttonPlay.setAttribute("src", "./assets/img/Player/Play.png");
        }
    }


    function videofull(){
        if(Fullcount == 0)
        {
            Fullcount = 1;
            display.requestFullscreen();
            video.classList.add('active');
        }
        else{
            Fullcount = 0;
            document.exitFullscreen();
            video.classList.remove('active');
        }
        
    }

    BlockVideo.addEventListener('click', function(e) {
        document.addEventListener('keyup', function(event){
            if(event.keyCode == 32)
            {
                play();
            }
            if(event.keyCode == 77)
            {
                mute();
            }
            if(event.keyCode == 70){
                videofull();
            }
            if(event.shiftKey && event.keyCode == 188 )
            {
                    speedUp();
            }
            if(event.shiftKey && event.keyCode == 190)
            {
                    speedDown();
            }
        });
        
        window.onkeydown = function(e) {
            return !(e.keyCode == 32);
        };
    });
    video.addEventListener('click', function(e) {  
        play();
    });