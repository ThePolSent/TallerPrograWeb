// ============================
//         MODO USUARIO
// ============================
document.addEventListener('DOMContentLoaded', () => {
    const user = localStorage.getItem('usuario');
    const loginIcon = document.getElementById('login-icon');
    const userMenu = document.getElementById('userMenu');
    const userButton = document.getElementById('userButton');
    const logoutBtn = document.getElementById('logoutButton');
    const usernameDisplay = document.getElementById('usernameDisplay');

    // Si el usuario está logueado
    if (user) {
        if (loginIcon) loginIcon.style.display = 'none'; // Ocultar ícono de login
        if (userMenu) {
            userMenu.style.display = 'block'; // Mostrar menú de usuario
            usernameDisplay.textContent = user; // Mostrar nombre de usuario
        }
    } else {
        // Si no hay usuario, mostrar el icono de login
        if (loginIcon) loginIcon.style.display = 'block'; // Mostrar icono de login
        if (userMenu) userMenu.style.display = 'none'; // No mostrar el menú de usuario
    }

    // Función para mostrar/ocultar el menú de usuario al hacer clic en el ícono
    if (userButton) {
        userButton.addEventListener('click', () => {
            userMenu.querySelector('.submenu').classList.toggle('open');
        });
    }

    // Función para cerrar sesión
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('usuario');
            window.location.reload(); // Recargar la página para reflejar el estado de no logueado
        });
    }

    // Redirigir al inicio de sesión si el usuario hace clic en el icono de login
    if (loginIcon) {
        loginIcon.addEventListener('click', () => {
            localStorage.setItem('lastVisitedURL', window.location.href); // Guardar la última URL visitada
            window.location.href = '../../login/principaliniciosesion/iniciarsesion.html'; // Redirigir a la página de login
        });
    }

});

// ============================
//         TEMA OSCURO
// ============================
    const themeBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    const temaGuardado = localStorage.getItem('tema');
    if (temaGuardado === 'oscuro') {
        body.classList.add('dark-mode');
        themeIcon.setAttribute('name', 'sunny-outline');
    } else {
        themeIcon.setAttribute('name', 'moon-outline');
    }

    themeBtn.addEventListener('click', () => {
        const esOscuro = body.classList.toggle('dark-mode');
        localStorage.setItem('tema', esOscuro ? 'oscuro' : 'claro');
        themeIcon.setAttribute('name', esOscuro ? 'sunny-outline' : 'moon-outline');
    });

// ============================
//        BOTÓN DE AUDIO
// ============================
document.addEventListener('DOMContentLoaded', () => {
    const audioBtn = document.getElementById('audio-toggle');
    const audioIcon = document.getElementById('audio-icon');
    const audioPlayer = document.getElementById('audio-player');
    let isPlaying = false;

    audioBtn.addEventListener('click', () => {
        if (isPlaying) {
            audioPlayer.pause();
            audioIcon.setAttribute('name', 'volume-mute-outline');
        } else {
            audioPlayer.play();
            audioIcon.setAttribute('name', 'volume-high-outline');
        }
        isPlaying = !isPlaying;
    });

    // Asegurarse de que el ícono vuelva a mute si se pausa de otra forma
    audioPlayer.addEventListener('pause', () => {
        audioIcon.setAttribute('name', 'volume-mute-outline');
        isPlaying = false;
    });

    audioPlayer.addEventListener('play', () => {
        audioIcon.setAttribute('name', 'volume-high-outline');
        isPlaying = true;
    });
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
