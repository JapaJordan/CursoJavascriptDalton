class App{
	constructor(descargas,puntuacion,peso){
		this.donwload = descargas;
		this.point = puntuacion;
		this.peso = peso;
		this.instalar = false;
		this.abrir = false;
 	}

	infoMostrar(){
		return `Descargas realizadas: <b>${this.donwload}</b><br>
		Puntuacion recibida: <b>${this.point}</b><br>
		Espacio requerido: <b>${this.peso}</b><br>
		`;
	}

	instalarApp(){
		//this.infoMostrar();
		if (this.instalar == false) {
			this.instalar = true;
			if (this.instalar == true) {
				alert(`Instalada App Corretamente... Gracias por confiar en nosotros`);
			}
			else{
				alert(`Error en instalacion.`);
			}
		}
		else{
			alert(`La App ya se encuentra instalada`);
		}
	}

	desintalar(){
		if (this.instalar == true){
			this.instalar = false;
		if (this.instalar == false) {
				alert(`Desinstalada App Corretamente...`);
			}
			else{
				alert(`Error en Desinstalacion.`);
			}
		}else{
			alert(`La App no esta instalada`);
		}
	}

	abrirApp(){
		if (this.abrir == false && this.instalar == true) {
			this.abrir = true;
			
			alert(`Abriendo App.  Bienvenido...!!!`);
		}
		else{
			alert(`La App ya esta siendo usada`);
		}
	}

	cerrarApp(){
		if (this.abrir == true && this.instalar == true) {
			this.abrir = false;
			alert(`Cerrando App.  Hasta luego, te esperamos pronto...!!!`);
		}
	}

}

aplicacion = new App(`1.456 Descargas realizadas`, `5 estrellas`, `40MB`);
aplicacion1 = new App(`12.456 Descargas realizadas`, `4.9 estrellas`, `50MB`);

aplicacion.instalarApp();
aplicacion.abrirApp();
aplicacion.cerrarApp();
aplicacion.desintalar();


document.write(`
	${aplicacion.infoMostrar()}<br>
	${aplicacion1.infoMostrar()}
	`);