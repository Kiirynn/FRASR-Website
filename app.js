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