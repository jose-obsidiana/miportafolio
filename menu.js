const menu = document.querySelector('.cont-menu');
const links = document.querySelectorAll('.nav-link');

// Escuchar clics en cada enlace
links.forEach(link => {
    link.addEventListener('click', () => {
        // Cerrar el menú
        document.getElementById('btn-menu').checked = false;
    });
});