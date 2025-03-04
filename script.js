document.getElementById("currentYear").textContent = new Date().getFullYear();

const main = document.getElementById("main");

const mobileMenu = document.getElementById("mobileMenu");

const btnProg = document.getElementById("btnProg");
const btnEsp = document.getElementById("btnEsp");
const btnForm = document.getElementById("btnForm");
const btnCont = document.getElementById("btnCont");

const btnProgMobile = document.getElementById("btnProgMobile");
const btnEspMobile = document.getElementById("btnEspMobile");
const btnFormMobile = document.getElementById("btnFormMobile");
const btnContMobile = document.getElementById("btnContMobile");

function toggleMenu() {
    mobileMenu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

function closeMenu() {
    mobileMenu.style.display = "none";
}

/*
$(function(){
    $("#main").load("home.html");
});
*/

/* Funzioni per caricare le singole pagine */

function loadHome() {

    main.innerHTML = home;

    btnProg.classList.remove("menu-item-active");
    btnProgMobile.classList.remove("menu-item-active");
    btnEsp.classList.remove("menu-item-active");
    btnEspMobile.classList.remove("menu-item-active");
    btnCont.classList.remove("menu-item-active");
    btnContMobile.classList.remove("menu-item-active");
    btnForm.classList.remove("menu-item-active");
    btnFormMobile.classList.remove("menu-item-active");

}

function loadProgetti() {

    generaBloccoProgetti();

    btnEsp.classList.remove("menu-item-active");
    btnEspMobile.classList.remove("menu-item-active");
    btnForm.classList.remove("menu-item-active");
    btnFormMobile.classList.remove("menu-item-active");
    btnCont.classList.remove("menu-item-active");
    btnContMobile.classList.remove("menu-item-active");

    btnProg.classList.add("menu-item-active");
    btnProgMobile.classList.add("menu-item-active");
    
    mobileMenu.style.display = "none";

}

function loadEsperienza() {

    generaBloccoEsperienza();

    btnProg.classList.remove("menu-item-active");
    btnProgMobile.classList.remove("menu-item-active");
    btnForm.classList.remove("menu-item-active");
    btnFormMobile.classList.remove("menu-item-active");
    btnCont.classList.remove("menu-item-active");
    btnContMobile.classList.remove("menu-item-active");

    btnEsp.classList.add("menu-item-active");
    btnEspMobile.classList.add("menu-item-active");
    
    mobileMenu.style.display = "none";

}

function loadFormazione() {

    generaBloccoFormazione();

    btnProg.classList.remove("menu-item-active");
    btnProgMobile.classList.remove("menu-item-active");
    btnEsp.classList.remove("menu-item-active");
    btnEspMobile.classList.remove("menu-item-active");
    btnCont.classList.remove("menu-item-active");
    btnContMobile.classList.remove("menu-item-active");

    btnForm.classList.add("menu-item-active");
    btnFormMobile.classList.add("menu-item-active");
    
    mobileMenu.style.display = "none";

}

function loadContatti() {

    main.innerHTML = contatti;

    btnProg.classList.remove("menu-item-active");
    btnProgMobile.classList.remove("menu-item-active");
    btnEsp.classList.remove("menu-item-active");
    btnEspMobile.classList.remove("menu-item-active");
    btnForm.classList.remove("menu-item-active");
    btnFormMobile.classList.remove("menu-item-active");

    btnCont.classList.add("menu-item-active");
    btnContMobile.classList.add("menu-item-active");
    
    mobileMenu.style.display = "none";

}

/* Inizializzazione della pagina home */

main.innerHTML = home;