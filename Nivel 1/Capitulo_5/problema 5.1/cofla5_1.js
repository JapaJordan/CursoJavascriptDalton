const materias = {
		Fisica : [80,6,4,`Fisica`],
		Matematica : [75,8,4,`Matematica`],
		Contabilidad : [90,7,4,`Contabilidad`],
		Programacion : [95,9,4,`Programacion`],
		Logica : [100,10,4,`Logica`],
		BDD : [100,6,4,`BDD`]
}

const aprobo = ()=>{
	for (materia in materias){
		let asistencias = materias[materia][0];
		let promedio = materias[materia][1];
		let trabajos = materias[materia][2];
		
		console.group(materias[materia][3]); 

		if (asistencias >= 90) {
			console.log(`%c   Asistencia Aprobado`, `color:green`);
		}else{
			console.log(`%c   Asistencia Reprobado`, `color:red`);
		}

		if (promedio >= 7) {
			console.log(`%c   Promedio Aprobado`, `color:green`);
		}else{
			console.log(`%c   Promedio Reprobado`, `color:red`);
		}

		if (trabajos >= 3 ) {
			console.log(`%c   Trabajos Reprobado`, `color:green`)
		}else{
			console.log(`%c   Trabajos Reprobado`, `color:red`);
		}
		console.groupEnd();
	}
	console.log(`%c Esta es la informacion del Alumno Cofla`,
		`background:black; padding:20px; color:white; border: 3px solid green;`);
}

aprobo();