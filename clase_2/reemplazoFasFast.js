let texto ="texto a reemplazar";
let textoAReemplazar= "texto";
let textoDeReemplazo="cabeza"

function reemplazoFastFast (texto,textoAntiguo, textoNuevo){

let fraseFinal=texto.replace(textoAntiguo,textoNuevo);

    return(fraseFinal);
}

console.log(reemplazoFastFast(texto, textoAReemplazar, textoDeReemplazo));
