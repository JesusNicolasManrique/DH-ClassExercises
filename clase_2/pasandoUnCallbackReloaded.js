let sitio ="google.com";
let listaDeSitios=["google.com","yahoo.com","facebook.com" ];

function agregarHttp(url) {
    return "http://"+url;
}

function procesar(lista,funcionReemplazo){ 
    let listaFinal =[];
    for (var i =0; i<lista.length; i++) {
          listaFinal.push(funcionReemplazo(lista[i])) ;
    }
       
    return listaFinal;
}
//procesar(listaDeSitios,agregarHttp);
console.log (procesar(listaDeSitios,agregarHttp));