// ============================
//        FORMULARIO LOGIN
// ============================

// Mostrar/ocultar el formulario de inicio de sesión
function toggleLoginForm() {
    const loginForm = document.getElementById('login-form');
    loginForm.style.display = (loginForm.style.display === 'none' || loginForm.style.display === '') ? 'block' : 'none';
}

// Simulación de inicio de sesión
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        alert('Inicio de sesión exitoso');
        document.getElementById('login-form').style.display = 'none';
    } else {
        alert('Por favor, complete ambos campos.');
    }
}

// ============================
//         TEMA OSCURO
// ============================

const themeBtn = document.getElementById('theme-toggle');
const body = document.body;

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    themeBtn.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// ============================
//        MENÚ DESPLEGABLE
// ============================

// Mostrar/ocultar submenús (cerrando los otros)
function toggleSubmenu(event) {
    event.preventDefault();
    event.stopPropagation();

    const parentLi = event.currentTarget.parentElement;

    document.querySelectorAll('.has-submenu').forEach(item => {
        if (item !== parentLi) {
            item.classList.remove('open');
        }
    });

    parentLi.classList.toggle('open');
}

// Asignar eventos a enlaces con submenús
document.querySelectorAll('.has-submenu > a').forEach(link => {
    link.addEventListener('click', toggleSubmenu);
});

// Cerrar submenús y login al hacer clic fuera
document.addEventListener('click', function (event) {
    const isSubmenu = event.target.closest('.has-submenu');
    const isLoginForm = event.target.closest('#login-form');
    const isLoginButton = event.target.closest('#login-btn');

    if (!isSubmenu && !isLoginForm && !isLoginButton) {
        document.querySelectorAll('.has-submenu').forEach(item => item.classList.remove('open'));
        document.getElementById('login-form').style.display = 'none';
    }
});

// ============================
//        MENÚ HAMBURGUESA
// ============================

document.querySelector('.menu-hamburguesa').addEventListener('click', function () {
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
});

document.addEventListener('click', function (event) {
    const isNav = event.target.closest('nav');
    const isHamburguesa = event.target.closest('.menu-hamburguesa');

    if (!isNav && !isHamburguesa) {
        document.querySelector('nav').classList.remove('open');
    }
});

// ============================
//        MODAL DE JUEGO
// ============================

// Abrir modal desde cualquier tarjeta de juego
const gameCards = document.querySelectorAll(".game-card");

gameCards.forEach((card) => {
    card.onclick = function () {
        const image = card.querySelector(".image-popular, .image-carrusel");
        const modal = document.getElementById("modal");
        const modalImage = document.getElementById("modal-image");
        const modalButton = document.getElementById("modal-button");
        const modalDescription = document.getElementById("modal-description");
        const modalTitle = document.getElementById("modal-title");

        modal.classList.add('show');
        document.body.classList.add('modal-open');

        modalImage.src = image.src;
        modalDescription.textContent = image.dataset.description;
        modalButton.href = image.dataset.detailsLink;
        modalTitle.textContent = image.dataset.title;
    };
});

// Función para cerrar el modal
function cerrarModal() {
    const modal = document.getElementById("modal");
    modal.classList.remove('show');
    document.body.classList.remove('modal-open');
}

// Botón cerrar modal
document.querySelectorAll(".close-btn").forEach((btn) => {
    btn.onclick = cerrarModal;
});

// Cerrar modal al hacer clic fuera del contenido
window.onclick = function (event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        cerrarModal();
    }
};

// Cerrar modal con tecla ESC
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        cerrarModal();
    }
});

// ============================
//     CARRUSEL DE JUEGOS
// ============================

document.querySelectorAll('.carrusel-wrapper').forEach(wrapper => {
    const track = wrapper.querySelector('.carrusel-track');
    const btnIzq = wrapper.querySelector('.btn-izq');
    const btnDer = wrapper.querySelector('.btn-der');
    const items = wrapper.querySelectorAll('.videojuego');

    const visibleItems = 4;
    const itemWidth = items[0].getBoundingClientRect().width + 20; // Ajusta según tu gap
    let scrollIndex = 0;
    const maxScrollIndex = Math.max(0, items.length - visibleItems);

    function updateButtons() {
        btnIzq.style.display = scrollIndex <= 0 ? 'none' : 'block';
        btnDer.style.display = scrollIndex >= maxScrollIndex ? 'none' : 'block';
    }

    btnIzq.addEventListener('click', () => {
        if (scrollIndex > 0) {
            scrollIndex--;
            track.style.transform = `translateX(-${scrollIndex * itemWidth}px)`;
            updateButtons();
        }
    });

    btnDer.addEventListener('click', () => {
        if (scrollIndex < maxScrollIndex) {
            scrollIndex++;
            track.style.transform = `translateX(-${scrollIndex * itemWidth}px)`;
            updateButtons();
        }
    });

    track.style.animation = 'none';
    updateButtons();
});

// ============================
//      HEADER SCROLL FIX
// ============================

const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        header.classList.add('scrolled');
        header.style.zIndex = '1000';
    } else {
        header.classList.remove('scrolled');
        header.style.zIndex = '1';
    }
});
