const elBtn = document.querySelector(".burger__btn"); 
const elMenu = document.querySelector(".navbar");

elBtn.addEventListener("click", function(e) {
    elMenu.classList.add("navbar--open")
});