let dia = 'viernes'
function finDeSemana (dia) {	
	switch(dia) {
    	 case ('viernes'):
			console.log('buen finde');
			break;
		 case ('lunes') :
    		console.log('buena semana');
        	break;	 
		 default:
    		console.log('buen dia');
			break;
	}
}

let anda = finDeSemana (dia);