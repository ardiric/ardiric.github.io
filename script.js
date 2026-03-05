document.getElementById("currentYear").textContent = new Date().getFullYear();

const overlay = document.getElementById('overlay');
const mobileMenu = document.getElementById("mobileMenu");

function toggleMenu() {
    mobileMenu.style.display = menu.style.display === "flex" ? "none" : "flex";
    overlay.classList.toggle('show');
}

function closeMenu() {
    mobileMenu.style.display = "none";
    overlay.classList.remove('show');
}

overlay.addEventListener('click', function () {
    mobileMenu.style.display = "none";
    overlay.classList.remove('show');
});
