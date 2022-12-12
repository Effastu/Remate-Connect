//const connection = require("express-myconnection");

const connection = require("express-myconnection");

const control = {};

control.registro = (req, res) => {
  req.getConnection((err, conn) => {
  conn.query('SELECT * FROM cliente', (err, cliente) => {
   if (err) {
        res.json(err);
   }
   res.render('Registrar', {
        data: cliente
   });
  });
});
};


control.registrarse = (req, res, next) => {

    const data = {
     nombre : req.body.nombre,
	   apellido : req.body.apellido,
     cedula : req.body.cedula,
	   contrasena : req.body.contrasena,
     correoUsuario : req.body.correo
    };

    let contrasenaVer = req.body.contrasenaVer;

    console.log(data);

if (data.contrasena == contrasenaVer){
    req.getConnection ((err, con) => {
        if(err){   
            return res.send(err)
        }
        else{ 
            con.query("INSERT INTO cliente (idCliente, nombreCliente, apellidoCliente, cedulaCliente, contrasenaCliente, nombreUsuario, nivelAcceso) VALUES (null, ?, ? , ?, ?, ?, ?) ",[data.nombre, data.apellido, data.cedula, data.contrasena, data.correoUsuario, 0], function(err, result){
            res.render('index');
    });
            }
  });
}
else{
    res.send('No coinciden las contraseñas');
}
};



control.Borrar = (req, res) => {
    const  {cedula } = req.params;
    console.log(cedula);
    req.getConnection((err, connection) => {
      connection.query("DELETE FROM cliente WHERE cedulaCliente = ?", [cedula], (err, rows) => {
        res.redirect('/AdministrarCliente');
      });
    });
  }



control.actualizar = (req, res, next) => {
  const { cedula } = req.params;
  const data = {
    nombre : req.body.nombre,
    apellido : req.body.apellido,
    cedula : req.body.cedula,
    contrasena : req.body.contrasena,
    correoUsuario : req.body.correo
   };
  req.getConnection((err, conn) => {

  conn.query('UPDATE cliente set ? where cedula = ?', [data, cedula], (err, rows) => {
    res.redirect('/Registar');
  });
  });
};

control.adminCliente = (req, res) => {
  req.getConnection((err, conn) => {
  conn.query('SELECT * FROM cliente', (err, cliente) => {
   if (err) {
        res.json(err);
   }
   res.render('AdministrarCliente', {
        data: cliente
   });
  });
});
};

control.registrarseAdmin = (req, res, next) => {

  const data = {
   nombre : req.body.nombre,
   apellido : req.body.apellido,
   cedula : req.body.cedula,
   contrasena : req.body.contrasena,
   correoUsuario : req.body.correo
  };

  let contrasenaVer = req.body.contrasenaVer;


if (data.contrasena == contrasenaVer){
  req.getConnection ((err, con) => {
      if(err){   
          return res.send(err)
      }
      else{ 
          con.query("INSERT INTO cliente (idCliente, nombreCliente, apellidoCliente, cedulaCliente, contrasenaCliente, nombreUsuario, nivelAcceso) VALUES (null, ?, ? , ?, ?, ?, ?) ",[data.nombre, data.apellido, data.cedula, data.contrasena, data.correoUsuario, 1], function(err, result){
            res.redirect('/AdministrarCliente');
  });
          }
});
}
else{
  res.send('No coinciden las contraseñas');
}
};


module.exports = control;