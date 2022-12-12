const control = {};

control.misCompras = (req, res, next) => {
    if (req.session.username)
    {
    res.render('misCompras');
    next();
}
else{
res.render('login')
}
};


control.consultar = (req, res, next) => {
    res.render('misCompras');
    next();
};


module.exports = control;