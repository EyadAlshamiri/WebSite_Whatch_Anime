function enter (title) {
   const sgin = document.querySelectorAll('.creat-acount') ; 

   sgin.forEach(content => {
      content.classList.remove ('active') ;
      if (content.classList.contains(title)) {
         content.classList.add('active');
      }
   });

}