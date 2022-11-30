// navbar

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav ul');
    const links = document.querySelectorAll('nav li');
     //toggle nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
       
       //animate links
        links.forEach((link, index) => {
            if(link.style.animation){
             link.style.animation = '';
             }
             else {
                 link.style.animation =  `navLinkFade .3s ease forwards ${index / 7 + 0.5}s`;
             }
         });

         //burger animation
         burger.classList.toggle('toggle');
        
    });


};

navSlide();



//load functions

 window.addEventListener('load', function (){
   
    const links = document.querySelectorAll('nav li');
    
    links.forEach((link, index) => {
        if(link.style.animation){
         link.style.animation = '';
         }
         else {
             link.style.animation =  `navLinkFade .5s ease forwards ${index / 7 + 0.1}s`;
         }
     });
});








// top button

const topBtn = document.getElementById("topBtn");

topBtn.addEventListener('click', function(){
    window.scrollTo(top = 0, behavior = 'smooth' ) ;

    topBtn();
});


// detect dark mode

const isDarkMode = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
};


const loader = document.getElementById('preloader');

window.addEventListener("load", function(){
      loader.style.display = "none" ;
});