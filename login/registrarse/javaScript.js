// ============================
//         MODO USUARIO
// ============================
document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.querySelector('form');

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevenir envío tradicional

            const fullName = document.getElementById('full-name').value.trim();
            const username = document.getElementById('username').value.trim();
            const email = document.getElementById('email').value.trim();
            const birthdate = document.getElementById('birthdate').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            // Validación simple
            if (!fullName || !username || !email || !birthdate || !password || !confirmPassword) {
                alert('Por favor, completa todos los campos.');
                return;
            }

            if (password !== confirmPassword) {
                alert('Las contraseñas no coinciden.');
                return;
            }

            // Aquí podrías guardar los datos en localStorage o enviarlos a un backend
            localStorage.setItem('usuario', username);
            localStorage.setItem('email', email);

            alert('¡Registro exitoso!');

            // Redirigir a la última página visitada o una por defecto
            const lastVisited = localStorage.getItem('lastVisitedURL');
            window.location.href = lastVisited ? lastVisited : '../../../../index.html';
        });
    }
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


