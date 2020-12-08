let horaFree = false;

const horaLibreFunction = (horaLibre)=>{
	let edadPersonaFiesta = prompt(`Indica tu edad por favor: `);
	let personaFiesta = prompt(`Tu nombre es: `);
	
	edadPersonaFiesta = parseInt(edadPersonaFiesta);
	
	if (edadPersonaFiesta > 18) {
		
		if (horaLibre >= 2 && horaLibre <= 7 && !horaFree) {
			alert(`Tu entrada es GRATIS ${personaFiesta} por que son las ${horaLibre}:00Hrs y eres la primera Persona en entrar`);
			return horaFree = true;
		}else
		{
			alert(`Son las ${horaLibre}:00Hrs Puedes pasar pero tenes que pagar entrada `+ personaFiesta);
			
		}
	}
	else{
		alert(`Lo siento tienes que crecer aun anda a dormir `+`"`+personaFiesta+`"`);
	}
	
}


horaLibreFunction(23);
//horaLibreFunction(24);
horaLibreFunction(0.2);
horaLibreFunction(2);
horaLibreFunction(2.3);
// horaLibreFunction(3);
