function doble (numero){
    return numero *2;
    }
    
    function triple (numero){
    return numero *3;
    }
    
    function apply (numero, callback){
    return callback(numero);
    }

    console.log(apply (3, doble));