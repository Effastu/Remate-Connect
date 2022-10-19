
let linkIniciarSesion = document.querySelector('#li-iniciar-sesion')
let btnSalir = document.querySelector('#btn-salir')
let contLogin = document.querySelector('.contenedor-login');
let contHeader = document.querySelector('header')
linkIniciarSesion.addEventListener('click', (e) => {
    e.preventDefault();
    contLogin.classList.add('mostrar');
    contHeader.style.display = 'none'
});
btnSalir.addEventListener('click', (e) => {
    e.preventDefault();
    contLogin.classList.remove('mostrar');
    contHeader.style.display = 'flex'
})