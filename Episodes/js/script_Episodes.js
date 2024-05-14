
//  toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.nav');

menuIcon.onclick = () => {
   menuIcon.classList.toggle('bx-x') ;
   navbar.classList.toggle('active') ; 
}

function toggleVideo(Episode){
   const trailer = document.querySelector('.trailer');

   trailer.innerHTML = `<video src="../video/${Episode}" 
   muted
   controls="true" 
   autoplay="true"
   ></video>
   <a href="" onclick="toggleVideo()">X</a>"` ;

   const video = document.querySelector('video') ;
   video.pause();
   trailer.classList.toggle('active');
};
