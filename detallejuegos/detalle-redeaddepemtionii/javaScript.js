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

if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        themeBtn.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });
}

// ============================
//        MENÚ DESPLEGABLE
// ============================

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

document.querySelectorAll('.has-submenu > a').forEach(link => {
    link.addEventListener('click', toggleSubmenu);
});

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

const menuHamburguesa = document.querySelector('.menu-hamburguesa');

if (menuHamburguesa) {
    menuHamburguesa.addEventListener('click', () => {
        const nav = document.querySelector('nav');
        nav.classList.toggle('open');
    });
}

document.querySelectorAll("nav ul li").forEach(item => {
    item.addEventListener("click", () => {
        const submenu = item.querySelector(".submenu");
        if (submenu) {
            submenu.classList.toggle("open");
        }
    });
});


// ============================
//        MODAL DE JUEGO
// ============================

const gameCards = document.querySelectorAll(".game-card");

function abrirModal(imageData) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    const modalButton = document.getElementById("modal-button");
    const modalDescription = document.getElementById("modal-description");
    const modalTitle = document.getElementById("modal-title");

    modal.classList.add('show');
    document.body.classList.add('modal-open');

    modalImage.src = imageData.src;
    modalDescription.textContent = imageData.dataset.description;
    modalButton.href = imageData.dataset.detailsLink;
    modalTitle.textContent = imageData.dataset.title;
}

function cerrarModal() {
    const modal = document.getElementById("modal");
    modal.classList.remove('show');
    document.body.classList.remove('modal-open');
}

// Agregar el evento de click para abrir el modal en las tarjetas de juego
gameCards.forEach(card => {
    card.addEventListener('click', () => {
        const image = card.querySelector(".image-popular, .image-carrusel");
        if (image) abrirModal(image);
    });
});

// Evento para cerrar el modal al hacer clic en el botón de cierre (X)
document.querySelectorAll(".close-btn").forEach(btn => {
    btn.addEventListener('click', cerrarModal);
});

// Evento para cerrar el modal al hacer clic fuera del modal
window.addEventListener('click', (event) => {
    const modal = document.getElementById("modal");
    if (event.target === modal) cerrarModal();
});

// Evento para cerrar el modal al presionar la tecla Escape
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") cerrarModal();
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
    const itemWidth = items[0].getBoundingClientRect().width + 20;
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

if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            header.classList.add('scrolled');
            header.style.zIndex = '1000';
        } else {
            header.classList.remove('scrolled');
            header.style.zIndex = '1';
        }
    });
}

function toggleDescripcion() {
    const descripcion = document.querySelector('.descripcion-juego');
    const botonVerMas = document.querySelector('.ver-mas-btn');

    if (descripcion && botonVerMas) {
        if (descripcion.classList.contains('colapsada')) {
            descripcion.classList.remove('colapsada');
            botonVerMas.textContent = 'Ver menos';
        } else {
            descripcion.classList.add('colapsada');
            botonVerMas.textContent = 'Ver más';
        }
    }
}


