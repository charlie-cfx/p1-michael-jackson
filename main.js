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