let btn = document.querySelectorAll('.btn');

    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", () => {
                btn[i].parentNode.classList.toggle("active");
        })
    }
