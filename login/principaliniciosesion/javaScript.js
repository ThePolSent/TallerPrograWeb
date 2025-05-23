// ============================
//         MODO USUARIO
// ============================
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('formulario-login');
    
    // Verificar si el formulario está presente
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevenir que el formulario se envíe de forma tradicional

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Aquí harías la validación de usuario y contraseña
            if (username && password) {
                // Si el login es exitoso, guardamos el usuario en localStorage
                localStorage.setItem('usuario', username);

                // Redirigir a la última página visitada o a una predeterminada
                const lastVisited = localStorage.getItem('lastVisitedURL');
                if (lastVisited) {
                    window.location.href = lastVisited;
                } else {
                    window.location.href = '../../../../index.html'; // O la página por defecto que prefieras
                }
            } else {
                alert('Por favor ingresa usuario y contraseña.');
            }
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


