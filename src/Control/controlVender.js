const control = {};

control.vender = (req, res, next) => {
    if (req.session.username)
    {
    res.render('vender');
    next();
}
else{
res.render('login')
}
};

control.guardarProducto = (req, res, next) => {
    const data = {
        id : req.body.idArticulo,
        nombre : req.body.Nombre,
        categoria : req.body.Categoria,
        cedula : req.body.cedula,
        marca : req.body.Marca,
        descripcion : req.body.Descripcion,
        fechaIni : req.body.FechaIni,
        fechaFin : req.body.FechaFin,
        valor : req.body.Valor
       };
       
       req.getConnection ((err, con) => {
        if(err){   
            return res.send(err)
        }
        else{ 
    con.query("INSERT INTO articulo (idArticulo, nobreArticulo, marcaArticulo, descripcionArticulo, valorArticulo, Foto, idCategoria_fk, idCliente_fk ) VALUES (?, ?, ? , ?, ?, ?, ?, ?) ",[data.id, data.nombre, data.marca, data.descripcion, data.valor, data.foto, data.categoria, data.cedula], function(err, result){
      res.render('index');
    });
            }
  });
   
   };


module.exports = control;