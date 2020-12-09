
let materias = {
		Fisica : [`Dalto`,'Jordan',`Yerimar`, `Freddy`, `Libia`,`Henk`],
		Matematica : [`Labrador`,'Jordan',`Yerimar`, `Freddy`, `Libia`, `Cofla`,`Henk`],
		Contabilidad : [`Alejandro`,'Jordan', `Freddy`, `Henk`],
		Programacion : [`David`,'Jordan',`Freddy`, `Libia`, `Cofla`,`Henk`,`Lucas`],
		Logica : [`Roberto`,'Jordan',`Yerimar`, `Freddy`, `Libia`, `Cofla`,`Henk`]
	}

const inscribir = (alumno,materia)=>{
	personas = materias[materia];
	personas.shift();
	alumnos = personas;
	if (alumnos.length >= 10){
		document.write(`Estimado <b>${alumno}</b><br> No hay cupo disponible para <b>${materia}</b>`);
	}else {
		//document.write(`Si hay cupo <b>${alumno}</b>`);
		alumnos.push(alumno);
		if (materia == "Fisica") {
			
			materias = {
				Fisica : alumnos,
				Matematica : materias['Matematica'],
				Contabilidad : materias['Contabilidad'],
				Programacion : materias['Programacion'],
				Logica : materias['Logica']
			}

		}else if (materia == "Matematica") {
			
			materias = {
				Fisica : materias['Fisica'],
				Matematica : alumnos,
				Contabilidad : materias['Contabilidad'],
				Programacion : materias['Programacion'],
				Logica : materias['Logica']
			}

		}else if (materia == "Contabilidad") {
			
			materias = {
				Fisica : materias['Fisica'],
				Matematica : materias['Matematica'],
				Contabilidad : alumnos,
				Programacion : materias['Programacion'],
				Logica : materias['Logica']
			}	

		}else if (materia == "Programacion") {
			
			materias = {
				Fisica : materias['Fisica'],
				Matematica : materias['Matematica'],
				Contabilidad : materias['Contabilidad'],
				Programacion : alumnos,
				Logica : materias['Logica']
			}

		}else if (materia == "Logica") {
			
			materias = {
				Fisica : materias['Fisica'],
				Matematica : materias['Matematica'],
				Contabilidad : materias['Contabilidad'],
				Programacion : materias['Programacion'],
				Logica : alumnos
			}
		}
		
		document.write(`Se ha inscrito en <b>${materia}</b> correctamente <b>${alumno}</b>...!!!<br>`);

			
			//document.write(`<br><br>Nueva lista de estudiantes: <br> `);

			for (totalAlumos of materias[materia]){
				document.write(`${totalAlumos}<br>`);
			}

		document.write(`<br>Total de Alumnos inscrito: <b>${alumnos.length}</b>`);
	}
}

inscribir('Wilmer','Programacion');