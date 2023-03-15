const keyFiguresClass = document.querySelector(".key-figures__list");

// KEY FIGURES
const keyFigures = [
    {
        iconClass: "bi-mic",
        title: "9 ans",
        description: "de tournée mondiale",
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
    {
        iconClass: "bi-star",
        title: "13",
        description: "Grammy Awards",
    },
    // // {
    //     iconClass: "bi-star",
    //     title: "13",
    //     description: "Grammy Awards",
    // },

    // {
    //     iconClass: "bi-star",
    //     title: "13",
    //     description: "Grammy Awards",
    // },
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

if (keyFigures.length % 2 === 0){
    console.log("Pair");
    for (let i = 0; i < keyFigures.length; i++) {
        createKeyFigures(keyFigures[i].iconClass, keyFigures[i].title, keyFigures[i].description);
    }
}else{
    console.log("Impair");

    for (let i = 0; i < (keyFigures.length - 1); i++) {
        createKeyFigures(keyFigures[i].iconClass, keyFigures[i].title, keyFigures[i].description);
    }
}


// CREATING A SLIDER
function createKeyFiguresSlider(sliderSelector, slideSelector, parentSelector, slideDuration) {
    // The slider
    const slider = document.querySelector(sliderSelector);

    // The slider's width
    const sliderWidth = document.querySelector(sliderSelector).offsetWidth;
   
    // The slider's number of slides
    const numberSlides = document.querySelector(sliderSelector).childElementCount;
    
    // The slides
    const slide = document.querySelector(slideSelector);
    
    // The slides's width
    const slideWidth = slide.offsetWidth;
    
    // The slider's parent height
    const parentHeight = document.querySelector(parentSelector).offsetHeight;
    
    
    // The slides's height
    
    // We add the 3 first slides at the end to create an infinite scrolling effect
    createKeyFigures(keyFigures[0].iconClass, keyFigures[0].title, keyFigures[0].description);
    createKeyFigures(keyFigures[1].iconClass, keyFigures[1].title, keyFigures[1].description);
    createKeyFigures(keyFigures[3].iconClass, keyFigures[3].title, keyFigures[3].description);
    
    let index = 0;
    
    setInterval(function () {
        if (window.screen.width < 768) {
            index++;
            slider.style.transition = "transform 1s linear ";
            slider.style.transform = `translateX(${index * -slideWidth}px)`;
            setTimeout(function () {
                if (index >= numberSlides) {
                    index = 0;
                    slider.style.transition = "unset";
                    slider.style.transform = `translateX(0)`;
                }
            }, 1000);
        } else {
            const slideHeight = parentHeight / 3;
            slider.style.height = `${parentHeight}px`;
            index++;
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

createKeyFiguresSlider(".key-figures__list", ".key-figure", "header .header__content", 3000);

// if (window.screen.width < 768) {

//     if (index === numberSlides - 1) {
//         slider.style.transition = "transform 1s ease";
//         slider.style.transform = `translateX(${index * -slideWidth - (slideWidth - sliderWidth)}px)`;

//     } else {

//         slider.style.transition = "transform 1s linear ";
//         slider.style.transform = `translateX(${index * -slideWidth}px)`;
//     }
// }else{
//     // slider.style.transform = `translate3d(0,${index * -slideHeight}px,0)`;

// }
