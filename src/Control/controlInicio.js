const control = {};

control.inicio = (req, res, next) => {
    res.render('index');
    next();
};

control.inicioLogin = (req, res, next) => {
  res.render('indexLogin');
  next();
};

control.inicioLoginAdmin = (req, res, next) => {
  res.render('indexAdministrador');
  next();
};


control.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM articulo', (err, articulos) => {
     if (err) {
      res.json(err);
     }
     res.render('articulo', {
        data: customers
     });
    });
  });
};

module.exports = control;