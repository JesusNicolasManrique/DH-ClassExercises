function noParesDeContarImparesHasta(numero){
    let contador =0;
    for (var i=0;i<=numero;i++){
      i%2 != 0  ? contador++ : "";
    }
    return contador;
 }
 console.log(noParesDeContarImparesHasta(7));