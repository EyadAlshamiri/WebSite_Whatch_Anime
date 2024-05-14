// Or with jQuery

$(document).ready(function(){
   $('.carousel').carousel();
});

//  toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.nav');

menuIcon.onclick = () => {
   menuIcon.classList.toggle('bx-x') ;
   navbar.classList.toggle('active') ; 
}


function toggleVideo(){
   const trailer = document.querySelector('.trailer');
   const video = document.querySelector('video') ;
   video.pause();
   trailer.classList.toggle('active');
};


function changeBg (bg ,title , video_animi) {
   const contents = document.querySelectorAll('.content') ;
   const banner = document.querySelector('.banner') ;
   var vid = document.getElementById('vid') ; 

   banner.style.backgroundImage = `url('img/bg/${bg}')` ; 
   banner.style.backgroundRepeat = 'no-repeat' ; 
   banner.style.backgroundSize= 'cover' ; 
   banner.style.backgroundPosition = 'center' ; 

   
      
   contents.forEach(content => {
      content.classList.remove ('active') ;
      if (content.classList.contains(title)) {
         content.classList.add('active');
      }
   });
   
   
   vid.innerHTML = `<video src="video/${video_animi}" 
   muted
   controls="true" 
   autoplay="true"
   ></video>
   <a href="" onclick="toggleVideo()">X</a>"` ;



} ;

