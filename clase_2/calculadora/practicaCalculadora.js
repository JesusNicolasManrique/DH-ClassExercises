// esta funcion va a sumar 2 valores
function sumar (value1, value2){
return value1+value2;
}
// esta funcion va a restar 2 valores
function restar (value1, value2){
    let resultadoPositivo=value1-value2;
    if (resultadoPositivo > 0){
        return console.log(resultadoPositivo);  
    } else {
        return "no se puede realizar la resta";
    } ;
}
// esta funcion va a multiplicar 2 valores
function multiplicar (value1, value2){
    if(value1 != 0 && value2 != 0){
    return value1*value2;
    } else {
return "algunos de los operandos es cero";
    }
}
// esta funcion va a dividir 2 valores
function dividir(value1, value2){
    if (value1== 0  || value2 == 0){
        return "no se puede dividir x 0" ;
    } else {
        return value1/value2;
    }
    
}


/*
* Esta funcion multiplica dos numeros
*/
function multiplicar(num1, num2){
    return  (num1 == 0 || num2 == 0) ? "resultado 0" : num1*num2;
}

console.log(sumar(1,3));
console.log(restar(1,3));
console.log(multiplicar(0,0));
console.log(dividir(1,3));
console.log(dividir(1,0));