let search_btn = document.querySelector("#search-btn");
let form_search = document.querySelector(".search-bar-container");
let form = document.querySelector(".login-form-container");
let form_close = document.querySelector("#form-close");
let open_form = document.querySelector("#login-btn");
let btn_inscrire = document.querySelector(".btn-inscrire");
let form_connection = document.querySelector(".connexion");
let form_inscription = document.querySelector(".inscription");
let btn_connecter = document.querySelector(".btn-connecter");

search_btn.addEventListener("click", function () {
    form_search.classList.toggle('active');
    search_btn.classList.toggle('fa-times');
})
window.onscroll = () => {
    form_search.classList.remove('active');
    search_btn.classList.remove('fa-times');
}
open_form.addEventListener("click", function () {
    form.classList.toggle('active');
})
form_close.addEventListener("click", function () {
    form.classList.remove("active");
})
btn_inscrire.addEventListener("click", function () {
    form_connection.style.display = "none";
    form_inscription.style.display = "block";
})
btn_connecter.addEventListener("click", function () {
    form_connection.style.display = "block";
    form_inscription.style.display = "none";
})
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});