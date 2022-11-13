
/* 1-Código para logear y btn salir del login*/

let linkIniciarSesion = document.querySelector('#li-iniciar-sesion');
let btnSalir = document.querySelector('#btn-salir-log');
let contLogin = document.querySelector('#cont-login');
let contHeader = document.querySelector('.encabezado');
let contTargetas = document.querySelector('#cont-tar')
let btnIniciarSesion = document.querySelector('#btn-ingresar');

let linkRegistrarUsuario = document.querySelector('#li-crear-cuenta');
let btnSalirReg = document.querySelector('#btn-salir-reg');
let contRegistrarse = document.querySelector('#cont-reg');
let btnNuevoUser = document.querySelector('#btn-nuevo');


/*El evento sobre el link iniciar sesión muestra el login y oculta lo demas*/

linkIniciarSesion.addEventListener('click', (e) => {
    e.preventDefault();
    contLogin.classList.add('mostrar-login');
    contHeader.style.display = 'none';
    contTargetas.style.display = 'none';
});
btnIniciarSesion.addEventListener('click', (e) => {
    e.preventDefault();
    contLogin.classList.add('mostrar-login');
    contHeader.style.display = 'none';
    contTargetas.style.display = 'none';
});


/*El evento sobre el btn salir cierrar el login y lleva a la pag inicio*/

btnSalir.addEventListener('click', (e) => {
    e.preventDefault();
    contLogin.classList.remove('mostrar-login');
    contHeader.style.display = 'flex';
    contTargetas.style.display = 'flex';

})


/* 2- Código para registrar y btn para salir modar registrar */


linkRegistrarUsuario.addEventListener('click', (e)=>{
    e.preventDefault();
    contRegistrarse.classList.add('mostrar-reg');
    contHeader.style.display = 'none';
    contTargetas.style.display = 'none';

})

btnNuevoUser.addEventListener('click', (e)=>{
    e.preventDefault();
    contRegistrarse.classList.add('mostrar-reg');
    contHeader.style.display = 'none';
    contTargetas.style.display = 'none';

})

btnSalirReg.addEventListener('click', (e)=>{
    e.preventDefault();
    contRegistrarse.classList.remove('mostrar-reg')
    contHeader.style.display = 'flex';
    contTargetas.style.display = 'flex';

})
