class Calculadora{
	construct(n1,n2){
		this.n1 = numero1;
		this.n2 = numero2;
	}

	suma(n1,n2){
		return parseInt(n1) + parseInt(n2);
	}
	resta(n1,n2){
		return parseInt(n1) - parseInt(n2);
	}
	multiplicacion(n1,n2){
		return parseInt(n1) * parseInt(n2);
	}
	division(n1,n2){
		return parseInt(n1) / parseInt(n2);
	}

	potencia(n1,exp){
		return parseInt(n1) ** parseInt(exp);
		alert(parseInt(n1) ** parseInt(exp));
	}


	rairCuadrada(n1){
		return Math.sqrt(n1);

	}


	raizCubica(n1){
		return Math.cbrt(n1);
	}
}

cal = new Calculadora();

alert(`Que Operacion quieres hacer...???`);
let operacion = prompt(`1:Sumar | 2:Restar | 3:Multiplicar | 4:Dividir 
	| 5:Potenciacion | 6: Raiz Cuadrada | 7: Raiz Cubica`);



if (operacion == 1) {
	let numero1 = prompt(`Indique el Primer numero para sumar: `);
	let numero2 = prompt(`Indique el Segundo numero para sumar: `);
	resultado = cal.suma(numero1,numero2);
}else if (operacion == 2) {
	let numero1 = prompt(`Indique el Primer numero para resta: `);
	let numero2 = prompt(`Indique el Segundo numero para resta: `);
	resultado = cal.resta(numero1,numero2);
}else if (operacion == 3) {
	let numero1 = prompt(`Indique el Primer numero para multiplicación: `);
	let numero2 = prompt(`Indique el Segundo numero para multiplicación: `);
	resultado = cal.multiplicacion(numero1,numero2);
}else if (operacion == 4) {
	let numero1 = prompt(`Indique el Primer numero para division: `);
	let numero2 = prompt(`Indique el Segundo numero para  division: `);
	resultado = cal.division(numero1,numero2);
}else if (operacion == 5) {
	let numero1 = prompt(`Indique Numero a exponenciar: `);
	let numero2 = prompt(`Exponente: `);
	resultado = cal.potencia(numero1,numero2);
}else if (operacion == 6) {
	let numero1 = prompt(`Indique el numero para calcular la Raiz Cuadrada: `);
	//let numero2 = prompt(`Indique el Segundo numero para  division: `);
	resultado = cal.rairCuadrada(numero1);
}else if (operacion == 7) {
	let numero1 = prompt(`Indique el numero para calcular la Raiz Cubica: `);
	//let numero2 = prompt(`Indique el Segundo numero para  division: `);
	resultado = cal.raizCubica(numero1);
}else{
	alert(`No es una opcion valida`);
}




//Agregado por mi para dar estilos distintos e IMPRIMIR resultado.
if (operacion == 1) {
	let operacionNombre = operacion;
	operacionNombre = "Suma"
	document.write(`<h2 style = "color:green">El resultado de la Operacion ${operacionNombre} es:<h2> <h1><b style = "color:blue">`+resultado+`</h1></b>`);
}else if (operacion == 2) {
	let operacionNombre = operacion;
	operacionNombre = "Resta"
	document.write(`<h2 style = "color:green">El resultado de la Operacion ${operacionNombre} es:<h2> <h1><b style = "color:yellow">`+resultado+`</h1></b>`);
}else if (operacion == 3) {
	let operacionNombre = operacion;
	operacionNombre = "Multiplicacion";
	document.write(`<h2 style = "color:green">El resultado de la Operacion ${operacionNombre} es:<h2> <h1><b style = "color:black">`+resultado+`</h1></b>`);
}else if (operacion == 4) {
	let operacionNombre = operacion;
	operacionNombre = "Division";
	document.write(`<h2 style = "color:green">El resultado de la Operacion ${operacionNombre} es:<h2> <h1><b style = "color:red">`+resultado+`</h1></b>`);	
}else if (operacion == 5) {
	let operacionNombre = operacion;
	operacionNombre = "Potenciacion";
	document.write(`<h2 style = "color:green">El resultado de la Operacion ${operacionNombre} es:<h2> <h1><b style = "color:orange">`+resultado+`</h1></b>`);	
}else if (operacion == 6) {
	let operacionNombre = operacion;
	operacionNombre = "Raiz Cuadrada";
	document.write(`<h2 style = "color:green">El resultado de la Operacion ${operacionNombre} es:
		<h2> <h1><b style = "color:#37F391A">`+resultado+`</h1></b>`);	
}else if (operacion == 7) {
	let operacionNombre = operacion;
	operacionNombre = "Raiz Cubica";
	document.write(`<h2 style = "color:green">El resultado de la Operacion ${operacionNombre} es:
		<h2> <h1><b style = "color:#DF137F">`+resultado+`</h1></b>`);	
}
