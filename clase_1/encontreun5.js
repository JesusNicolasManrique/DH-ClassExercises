let numeros= [2,3,89,5,80];
function encontreUn5 (numeros){
let i=0;
do{
    console.log(numeros[i]);
    i++;
} while (numeros[i]!=5) {
    console.log("Se encontró un 5!");
}
}

encontreUn5(numeros);