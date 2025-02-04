document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("menu");
    const itemes = document.getElementById("itemes");

    menu.addEventListener("click", () => {
        menu.classList.toggle("active");
        itemes.classList.toggle("active");
    });

    // Fermer le menu en cliquant à l'extérieur
    document.addEventListener("click", (e) => {
        if (!menu.contains(e.target) && !itemes.contains(e.target)) {
            menu.classList.remove("active");
            itemes.classList.remove("active");
        }
    });
});


var typed = new Typed('#element', {
    strings: ["Association des Étudiants en Sciences Physiques"],
    typeSpeed: 20,
    backSpeed: 0, 
    loop: true,
    fadeOut: true,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 0
});
