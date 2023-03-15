
let btnHistory = document.querySelector(".btn-history");
let btnIconHistory = document.querySelector('div.btn-history i');
let videoHistory = document.querySelector("#video-history");

const toggleVideoHistory = () => {
    if (btnIconHistory.className === "bi bi-chevron-down") {
    btnIconHistory.className = "bi bi-chevron-up";
    videoHistory.style.height = "max-content";
    } else {
        btnIconHistory.className = "bi bi-chevron-down";
        videoHistory.style.height = 0;
    }
}
btnHistory.addEventListener("click", toggleVideoHistory);

let btnConcert = document.querySelector(".btn-concert");
let btnIconConcert = document.querySelector('div.btn-concert i');
let videoConcert = document.querySelector("#video-concert");

const toggleVideoConcert = () => {
    if (btnIconConcert.className === "bi bi-chevron-down") {
    btnIconConcert.className = "bi bi-chevron-up";
    videoConcert.style.height = "max-content";
    } else {
        btnIconConcert.className = "bi bi-chevron-down";
        videoConcert.style.height = 0;
    }
}
btnConcert.addEventListener("click", toggleVideoConcert);


let btnDance = document.querySelector(".btn-dance");
let btnIconDance = document.querySelector('div.btn-dance i');
let videoDance = document.querySelector("#video-dance");

const toggleVideoDance = () => {
    if (btnIconDance.className === "bi bi-chevron-down") {
    btnIconDance.className = "bi bi-chevron-up";
    videoDance.style.height = "max-content";
    } else {
        btnIconDance.className = "bi bi-chevron-down";
        videoDance.style.height = 0;
    }
}
btnDance.addEventListener("click", toggleVideoDance);

let btnEvolution = document.querySelector(".btn-evolution");
let btnIconEvolution = document.querySelector('div.btn-evolution i');
let videoEvolution = document.querySelector("#video-evolution");

const toggleVideoEvolution = () => {
    if (btnIconEvolution.className === "bi bi-chevron-down") {
    btnIconEvolution.className = "bi bi-chevron-up";
    videoEvolution.style.height = "max-content";
    } else {
        btnIconEvolution.className = "bi bi-chevron-down";
        videoEvolution.style.height = 0;
    }
}
btnEvolution.addEventListener("click", toggleVideoEvolution);

let btnTuto = document.querySelector(".btn-tuto");
let btnIconTuto = document.querySelector('div.btn-tuto i');
let videoTuto = document.querySelector("#video-tuto");

const toggleVideoTuto = () => {
    if (btnIconTuto.className === "bi bi-chevron-down") {
    btnIconTuto.className = "bi bi-chevron-up";
    videoTuto.style.height = "max-content";
    } else {
        btnIconTuto.className = "bi bi-chevron-down";
        videoTuto.style.height = 0;
    }
}
btnTuto.addEventListener("click", toggleVideoTuto);





/*
let btn = document.querySelectorAll('.btn');
let video = document.querySelectorAll(".video");

const toggleVideo = () => {
    for (let i = 0; i < btn.length; i++) {
        if (btn[i] i.className === "bi bi-chevron-down") {
        btn[i] i.className = "bi bi-chevron-up";
        video[i].style.height = "max-content";
        } else {
        btn[i] i.className = "bi bi-chevron-down";
        video[i].style.height = 0;
        }
    }
}
btn.addEventListener("click", toggleVideo); */