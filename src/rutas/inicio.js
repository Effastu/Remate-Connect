const ruta = require('express').Router();
const controlInicio = require('../Control/controlInicio');
const controlComprar = require('../Control/controlComprar');
const controlVender = require('../Control/controlVender');
const controlMisCompras = require('../Control/controlMisCompras');
const controlLogin = require('../Control/controlLogin');
const controlRegistro = require('../Control/controlRegistro');

ruta.get('/', controlInicio.inicio);
ruta.get('/index', controlInicio.inicioLogin);
ruta.post('/', controlInicio.inicio);
ruta.get('/indexAdministrador', controlInicio.inicioLoginAdmin)

ruta.get('/Comprar', controlComprar.comprar);


ruta.get('/Vender', controlVender.vender);
ruta.post('/GuardarProducto', controlVender.guardarProducto);

ruta.get('/misCompras',controlMisCompras.misCompras);
ruta.get('/Consultar',controlMisCompras.consultar);


ruta.get('/Login' , controlLogin.login);
ruta.post('/login', function(req, res, next) {
    req.session.username=req.body.username;
});
ruta.post('/Autorizar', controlLogin.Autorizar)
ruta.post('/CerrarSeccion', controlLogin.cerrarSession)

ruta.get('/Registro', controlRegistro.registro);
ruta.post('/registrarse', controlRegistro.registrarse)
ruta.post('/registrarseAdmin', controlRegistro.registrarseAdmin)
ruta.get('/Borrar/:cedula', controlRegistro.Borrar)
ruta.get('/Actualizar/:cedula', controlRegistro.actualizar)
ruta.get('/Consultar', controlRegistro.actualizar)
ruta.get('/administrarCliente', controlRegistro.adminCliente)




module.exports = ruta;