function fovarit(anime) {
   let heart = document.getElementById('heart') ; 
   let anime_name = document.querySelector('.'+anime) ; 
   let item= document.getElementById('fover') ; 

   if (heart.style.color == 'gold')
      {
         heart.style.color = 'white' ;
         name_anime.remove() ; 
      }
   else
      {
         heart.style.color = 'gold' ; 
         item.innerHTML = `
         <div class="box ${anime}">
            <a href="#">
               <img src="../img/img/Akuyaku.jpg" alt="">
            </a>
            <h2>Akuyaku Reijou Level 99</h2>
         </div>
         ` ;
      } 
};

let name_anime = localStorage.getItem("mainVariable") || "defaul tvalue" ;

function Select_name (title) {
   name_anime = title ; 
   localStorage.setItem("mainVariable" , name_anime)
   console.log(name_anime) ; 
} ;

function reblace (title) {

   console.log(title) ; 
   
   const contents = document.querySelectorAll ('.main') ;
   
   contents.forEach(content => {
      content.classList.remove ('active') ;
      if (content.classList.contains(title)) {
         content.classList.add('active');
      }
   });
};

function toggleVideooo(){
   const trailer = document.querySelector('.comment');
   const div = document.querySelector('.item') ;
   div.pause();
   trailer.classList.toggle('active');
};


document.addEventListener ('load' , reblace(name_anime)) ;