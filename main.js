/* LOADER */

function displayWhenLoaded() {
    let timer;
    timer = setTimeout(fadeOutLoader, 3500);
}

function fadeOutLoader() {
    let element = document.getElementById("loader");
    let opacity = 1;

    // fonction d'animation
    function animate() {
        if (opacity > 0) {
            opacity -= 0.1; // diminution de l'opacité de 0.1 à chaque itération
            element.style.opacity = opacity;
            requestAnimationFrame(animate); // demande de répéter l'animation
        } else {
            element.style.display = "none"; // masquage de l'élément lorsque l'opacité atteint 0
        }
    }

    animate(); // démarrage de l'animation
}

/* HEADER'S SLIDER */

const keyFiguresClass = document.querySelector(".key-figures__list");

// KEY FIGURES
const keyFigures = [
    {
        iconClass: "bi-mic",
        title: "9 ans",
        description: "de tournée mondiale",
    },
    {
        iconClass: "bi-trophy",
        title: "152",
        description: "Awards et récompenses",
    },
    {
        iconClass: "bi-vinyl",
        title: "150 milions",
        description: "d’albums vendus",
    },
    {
        iconClass: "bi-star",
        title: "13",
        description: "Grammy Awards",
    },
];

function createKeyFigures(icon, title, description) {
    const keyFigure = document.createElement("div");
    keyFigure.classList.add("key-figure");
    keyFiguresClass.appendChild(keyFigure);

    const keyFigureIcon = document.createElement("i");
    keyFigureIcon.classList.add("bi", icon);
    keyFigure.appendChild(keyFigureIcon);

    const keyFigureContent = document.createElement("div");
    keyFigureContent.classList.add("key-figure__content");
    keyFigure.appendChild(keyFigureContent);

    const keyFigureTitle = document.createElement("p");
    keyFigureTitle.classList.add("key-figure__title");
    keyFigureTitle.textContent = title;
    keyFigureContent.appendChild(keyFigureTitle);

    const keyFigureDescription = document.createElement("p");
    keyFigureDescription.classList.add("key-figure__description");
    keyFigureDescription.textContent = description;
    keyFigureContent.appendChild(keyFigureDescription);
}

// CREATING THE KEY FIGURES

if (keyFigures.length % 2 === 0) {
    for (let i = 0; i < keyFigures.length; i++) {
        createKeyFigures(keyFigures[i].iconClass, keyFigures[i].title, keyFigures[i].description);
    }
} else {
    for (let i = 0; i < keyFigures.length - 1; i++) {
        createKeyFigures(keyFigures[i].iconClass, keyFigures[i].title, keyFigures[i].description);
    }
}

// CREATING A SLIDER
function createKeyFiguresSlider(sliderSelector, slideSelector, parentSelector, slideDuration) {
    // The slider
    const slider = document.querySelector(sliderSelector);

    // The slider's number of slides
    const numberSlides = document.querySelector(sliderSelector).childElementCount;

    // The slides
    const slide = document.querySelector(slideSelector);

    // The slides's width
    let slideWidth = slide.offsetWidth;

    // The slider's parent height
    let parentHeight = document.querySelector(parentSelector).offsetHeight;

    // The slides's height

    // We add the 3 first slides at the end to create an infinite scrolling effect
    createKeyFigures(keyFigures[0].iconClass, keyFigures[0].title, keyFigures[0].description);
    createKeyFigures(keyFigures[1].iconClass, keyFigures[1].title, keyFigures[1].description);
    createKeyFigures(keyFigures[3].iconClass, keyFigures[3].title, keyFigures[3].description);

    let index = 0;

    setInterval(function () {
        if (window.innerWidth < 768) {
            index++;
            slider.style.transition = "transform 1s linear ";
            slider.style.transform = `translateX(${index * -slideWidth}px)`;
            slider.style.height = "auto";
            setTimeout(function () {
                if (index >= numberSlides) {
                    index = 0;
                    slider.style.transition = "unset";
                    slider.style.transform = `translateX(0)`;
                }
            }, 1000);
        } else {
            index++;
            let slideHeight = parentHeight / 3;
            slider.style.height = `${parentHeight}px`;
            slider.style.transition = "transform 1s linear ";
            slider.style.transform = `translateY(${index * -slideHeight}px)`;
            setTimeout(function () {
                if (index >= numberSlides) {
                    index = 0;
                    slider.style.transition = "unset";
                    slider.style.transform = `translateY(0)`;
                }
            }, 1000);
        }
    }, slideDuration);
}

createKeyFiguresSlider("header .key-figures__list", "header .key-figure", "header .header__content", 3000);

/* BIOGRAPHY'S ACCORDION */

/* Gestion button biography
When we click the button, class active has added*/

let btn = document.querySelectorAll('#biographie .btn');

    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", () => {
                btn[i].parentNode.classList.toggle("active");
        })
    }
