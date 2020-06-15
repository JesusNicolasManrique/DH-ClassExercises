const fs = require('fs');

let indexController = {
    index: (req, res, next) => {
        console.log(req.body.color);
        console.log(req.body.lightcolor);

        console.log('color: ' + req.session.color);
        res.render('index', { color: req.session.color, lightcolor: req.session.lightcolor });


    },
    color: (req, res, next) => {
        req.session.color = req.body.color;
        req.session.lightcolor = req.body.lightcolor;
        res.redirect("/");
    },

    borrar: (req, res, next) => {
        req.session.color = req.body.color;
        res.redirect("/");
    },
    queColorEs: (req, res, next) => {
        req.session.color = req.body.color;
        res.redirect("/");
    }
}
module.exports = indexController;