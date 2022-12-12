const control = {};

control.comprar = (req, res, next) => {
    if (req.session.username)
    {
    res.render('comprar');
    next();
    }
    else{
    res.render('login')
    }
};


module.exports = control;