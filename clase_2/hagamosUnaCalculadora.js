function suma (numero1, numero2){
    return numero1+numero2;
    };
    
    function resta (numero1, numero2){
    return numero1-numero2;
    };
    
    function multiplicacion (numero1, numero2){
    return numero1*numero2;
    };
    
    function division (numero1, numero2){
    return numero1/numero2;
    };
    
    function calculadora(valor1,valor2,operacion){
    return operacion(valor1,valor2);
    };
    
    console.log(calculadora(3,4,resta));