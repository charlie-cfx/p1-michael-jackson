// récupérer les éléments HTML
const iconBtn = document.getElementsByClassName('icon');
const menu = document.getElementsByClassName('home-mobile');
const iconChild = document.querySelectorAll('.icon i');
console.log(iconChild.length);
for(let j = 0; j < iconBtn.length; j++ ){

    
  iconBtn[j].addEventListener('click', function() {
    // basculer la visibilité du menu
    for(let k = 0; k < iconChild.length; k++ ){
      iconChild[k].classList.toggle('bi-x');
      iconChild[k].classList.toggle('bi-list');

    }
    for(let i = 0; i < menu.length; i++ ){

      menu[i].classList.toggle('active');
    }
    
  });
}

// le mouvement de la barre de navigation  desktop
const nav = document.querySelector("#nav");

const onScroll = (event) => {
  const scrollPosition = event.target.scrollingElement.scrollTop;

  nav.classList.toggle("scrolled-down", scrollPosition > 156);
};

document.addEventListener("scroll", onScroll, { passive: true });



// le mouvement de la barre de navigation
// const nav = document.querySelector(".home-mobile a ");

// const onScroll = (event) => {
//   const scrollPosition = event.target.scrollingElement.scrollTop;

//   nav.classList.toggle("scrolled-down", scrollPosition > 56);
// };

// document.addEventListener("scroll", onScroll, { passive: true });


