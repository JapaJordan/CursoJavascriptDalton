let cantidaAlumnos = prompt(`Cuantos alumnos son: `);
let totalAlumnos = [];

for (i = 0; i < cantidaAlumnos; i++) {
	totalAlumnos[i] = [prompt(`Nombre del Alumno: ` +(i+ 1)),0];
}


const asistenciaClasesFunction = (nombre,p)=>{
	let presencia = prompt(nombre);
	if (presencia == "p" || presencia == "P") {
		totalAlumnos[p][1]++;
	}

}

for (i = 0; i < 30; i++) {
	for (alumno in totalAlumnos){
		asistenciaClasesFunction(totalAlumnos[alumno][0],alumno);
	}
}

for (alumno in totalAlumnos){
	let resultadoSemestre = `<h2>${totalAlumnos[alumno][0]}:</h2> <br><br>
	-----------------Presente : <b>${totalAlumnos[alumno][1]}</b><br>
	-----------------Ausente  : <b>${30 - totalAlumnos[alumno][1]}</b> `
	if (30 - totalAlumnos[alumno][1] > 30*0.10 ){
		resultadoSemestre+= `<b style= "color:red"> Esta REPROBADO por INASISTENCIA</b><br><br>`;
	}else{
		resultadoSemestre+= `</b><br>`;
	}
	document.write(resultadoSemestre);
}































// const asistenciaClasesFunction = ()=>{

// 	let personas = {
// 		`persona1` = `Jordan Perez`,
// 		`persona2` = `Yerimar Canache`,
// 		`persona3` = `Freddy Perez`,
// 		`persona4` = `Libia Alfonzo`
// 	}
	
// 	for per in personas(per.personas){
// 		let p = 0;
// 		let a = 0;
// 		asistencia = prompt(`${per.personas} esta presente: `);
// 		if (asistencia != p) {
// 			a +=;
// 			if (a == (30 * 0.10)) {
// 				alert("Este Alumno REPROBO la materia por faltas");

// 			}

// 			alert(`Numero de Faltas: ${a}`);
		
// 		}else{
// 			p +=;
// 			alert(`Perfecto ${per.personas}`);
// 		}

// 	}
// 	document.write(personas)
// }
// asistenciaClasesFunction();
