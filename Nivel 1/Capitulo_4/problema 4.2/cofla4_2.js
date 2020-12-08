const obtenerData = (materia)=>{
	materias = {
		Fisica : [`Dalto`,'Jordan',`Yerimar`, `Freddy`, `Libia`,`Henk`],
		Matematica : [`Labrador`,'Jordan',`Yerimar`, `Freddy`, `Libia`, `Cofla`,`Henk`],
		Contabilidad : [`Alejandro`,'Jordan', `Freddy`, `Henk`],
		Programacion : [`David`,'Jordan',`Freddy`, `Libia`, `Cofla`,`Henk`],
		Logica : [`Roberto`,'Jordan',`Yerimar`, `Freddy`, `Libia`, `Cofla`,`Henk`]
	}
	if (materias[materia] !== undefined) {
		return [materias[materia],materia,materias];
	}else{
		return materias;
	}

}

const mostrarInformacion = (materia)=>{

	let informacion =  obtenerData(materia);

	if (informacion !== false) {
		let profesor = informacion[0][0];
		alumnos = informacion[0];
		alumnos.shift();
		document.write(`<h3><b style= "color:green" >${materia}</b></h3>
			<h4>${alumnos}</h4>
			El Profesor es: <b shifttyle= "color:blue" >${profesor}	</b><br>
			`);

	}else{
		document.write(`No Existe la Data ${materia}`);
	}
}

const buscarColfa = (alumno)=>{
	let informacion =  obtenerData();
	let cantidadTotalCofla = 0;
	let clases = []
	//document.write(informacion);
	for (info in informacion) {
		//document.write(info);
		if (informacion[info].includes(alumno)) {
			cantidadTotalCofla++;
			clases.push(`  ` + info);
		}
	}

	return `<br>El alumno <b>${alumno}</b> esta inscrito en <b>${cantidadTotalCofla}</b> clases: 	
	<b>${clases}</b>
	`;
}

//mostrarInformacion(`Fisica`);
//mostrarInformacion(`Matematica`);
//mostrarInformacion(`Contabilidad`);
mostrarInformacion(`Programacion`);
//mostrarInformacion(`Logica`);

document.write(buscarColfa('Cofla'));
//document.write(buscarColfa('Jordan'));
//document.write(buscarColfa('Yerimar'));
