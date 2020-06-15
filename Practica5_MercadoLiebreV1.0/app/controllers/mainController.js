const fs = require('fs');
const path = require('path');



// Funciones privadas (que sólo las puedo acceder desde este mismo archivo)
function readJson(filename) {
    let archivoJson = JSON.parse(fs.readFileSync(path.join(__dirname, '/../models/' + filename + '.json'), 'utf-8'));
    return archivoJson;
}
// Funciones publicas
let mainController = {
    index: function(req, res, next) {
        let archivoJson = readJson('index');
        console.log(archivoJson);
        res.render('index', { data: archivoJson });

    }
}

module.exports = mainController;