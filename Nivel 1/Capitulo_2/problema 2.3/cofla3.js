const sumaFunction = (n1,n2)=>{
	return parseInt(n1) + parseInt(n2);
}
const restaFunction = (n1,n2)=>{
	return parseInt(n1) - parseInt(n2);
}
const multiplicacionFunction = (n1,n2)=>{
	return parseInt(n1) * parseInt(n2);
}
const divisionFunction = (n1,n2)=>{
	return parseInt(n1) / parseInt(n2);
}

alert(`Que Operacion quieres hacer...???`);
let operacion = prompt(`1:Sumar -- 2:Restar -- 3:Multiplicar -- 4:Dividir`);

if (operacion == 1) {
	let numero1 = prompt(`Indique el Primer numero para sumar: `);
	let numero2 = prompt(`Indique el Segundo numero para sumar: `);
	resultado = sumaFunction(numero1,numero2);
}else if (operacion == 2) {
	let numero1 = prompt(`Indique el Primer numero para resta: `);
	let numero2 = prompt(`Indique el Segundo numero para resta: `);
	resultado = restaFunction(numero1,numero2);
}else if (operacion == 3) {
	let numero1 = prompt(`Indique el Primer numero para multiplicación: `);
	let numero2 = prompt(`Indique el Segundo numero para multiplicación: `);
	resultado = multiplicacionFunction(numero1,numero2);
}else if (operacion == 4) {
	let numero1 = prompt(`Indique el Primer numero para division: `);
	let numero2 = prompt(`Indique el Segundo numero para  division: `);
	resultado = divisionFunction(numero1,numero2);
}else{
	alert(`No es una opcion valida`);
}

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
}







// let n1 = parseInt(prompt(`Indique el Primer numero: `));
// let n2 = parseInt(prompt(`Indique el Segundo numero: `));

// 	const sumaFunction = (numero1,numero2)=>{
// 		let resultado = numero1 + numero2;
// 		document.write(`<br>`);
// 		document.write(`<b style = "color:blue">`+resultado+`</b>`);
// 	}

// 	const restaFunction = (numero1,numero2)=>{
// 		let resultado = numero1 - numero2;
// 		document.write(`<br>`);
// 		document.write(`<b style = "color:green">`+resultado+`</b>`);	
// 	}

// 	const multiplicarFunction = (numero1,numero2)=>{
// 		let resultado = numero1 * numero2;
// 		document.write(`<br>`);
// 		document.write(`<b style = "color:red">`+resultado+`</b>`);
// 	}

// 	const divisionFunction = (numero1,numero2)=>{
// 		let resultado = numero1 / numero2;
// 		document.write(`<br>`);
// 		document.write(`<b style = "color:yellow">`+resultado+`</b>`);
// 	}


// sumaFunction(n1,n2);
// restaFunction(n1,n2);
// divisionFunction(n1,n2);
// multiplicarFunction(n1,n2);
