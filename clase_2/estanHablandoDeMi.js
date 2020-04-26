function menciona (texto, palabra){
    let encuentra = texto.indexOf(palabra) != -1 ?  true :  false ;
    return encuentra;
    }

console.log(menciona("esto es una locura","locura"));
console.log(menciona("esto es una locura","mania"));