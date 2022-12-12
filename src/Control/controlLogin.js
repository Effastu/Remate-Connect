//const connection = require("express-myconnection");
var express = require('express');

const control = {};

control.login = (req, res) => {
    res.render('login');
};



control.Autorizar = (req, res, next) => {

    let username = req.body.usuario;
	let password = req.body.contrasena;
    if (username && password) 
        req.getConnection((err, conn) =>{
            conn.query('SELECT * FROM cliente WHERE nombreUsuario = ? AND contrasenaCliente = ?', [username, password], function(error, results) {
            if (error) throw error;

			if (results.length > 0) {
				req.session.loggedin = true;
				req.session.username = username;
				if (results[0].nivelAcceso == 1){
					res.redirect('/indexAdministrador')
				}
				else{
				res.redirect('/index'),{data:results};}
			}
			else {
				res.send('Usuario y/o Contraseña Incorrecta');
			}			
			res.end();
		});
     });		
	
    else {
        res.redirect('/login')
		res.send('Por favor ingresa Usuario y Contraseña!');
		res.end();
            };
        }


		control.cerrarSession = (req, res) => {
			req.session.destroy();
			res.render('index')
		};


module.exports = control;
