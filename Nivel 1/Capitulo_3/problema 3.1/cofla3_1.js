	class Celular {

	constructor(color, peso, rPantalla, rCamara, mRam){
	this.color = color;
	this.peso = peso;
	this.resolucionPantalla = rPantalla;
	this.resolucionCamara = rCamara;             
	this.memoriaRam = mRam;
	this.encendido = false;
	//this.reiniciando = false;
	//this.apagando = false;
	} 

	mostrarInfo(){
		return `Color: <b>${this.color}</b><br>
		Peso: <b>${this.peso}</b><br>
		Tamaño de la Pantalla: <b>${this.resolucionPantalla}</b><br>
		Resolucion Camara: <b>${this.resolucionCamara}</b><br>
		Memoria Ram: <b>${this.memoriaRam}</b><br> `;
	}

	botonDeEncendido(){
		if (this.encendido == false) {
			alert(`El Telefono esta Encendido. Bienvenido...!!!`);
			this.encendido = true;
		}else{
			alert(`Apagando el Sistema<br>
				Hasta Pronto...!!!`);
			this.encendido = false;
		}
	} 

	reiniciar(){
		if (this.encendido == true) {
			alert(`Reiniciando Sistema`);
		}else{
			alert(`El Celular esta Apagando no se puede Reiniciar`);
		}
	} 


	tomarFoto(){
		alert(`Capturando Foto en una Resolucion de Camara de: ${this.resolucionCamara}`);
	} 

	grabar(){
		alert(`Grabando Video en una Resolucion de Camara de: ${this.resolucionCamara}`);
	} 


}

class CelularDeALtaGama extends Celular{
	constructor(color, peso, rPantalla, rCamara, mRam,rdce){
		super(color, peso, rPantalla, rCamara, mRam);
		this.resolucionDeCamaraExtra = rdce;
	}

	grabarVideoLento(){
		alert(`Estas Grabando en Camara Lenta`);
	}

	reconocimientoFacial(){
		alert(`Se realizo el Reconocimiento Facial`);
	}

	infoAltaGama(){
		return this.mostrarInfo() + `Resolucion de Camara Extra: 
		<b>${this.resolucionDeCamaraExtra}</b><br>`;
	}

}




//xia = new Celular(`Azul`, `15Gr`, `2940`, `Full HD`, `4GB`);
//sam = new Celular(`Negro`, `16Gr`, `2540`, `Full HD`, `4GB`);
//hua = new Celular(`Rojo`, `18Gr`, `2850`, `Full HD`, `4GB`);

//CELULAR ALTA GAMA

xiamiNote9 = new CelularDeALtaGama(`Azul Celeste`, `150Gr`, `3040`, `4K`, `8GB`, `Full HD`);
samsumgS10 = new CelularDeALtaGama(`Plateado`, `160Gr`, `3000`, `4K`, `8GB`, `Full HD`);


/*document.write(`
	${xia.mostrarInfo()}<br>
	${sam.mostrarInfo()}<br>
	${hua.mostrarInfo()}<br>
	`);*/


document.write(`
	${xiamiNote9.infoAltaGama()}<br>
	${samsumgS10.infoAltaGama()}<br>
	`);

xiamiNote9.botonDeEncendido();

// class Xiami9 extends Celular{
// 	constructor(color, peso, rPantalla,rCamara , mRam){
// 		super(color, peso, rPantalla, rCamara, mRam);
// 	}
// }

// class SamsumgS10 extends Celular{
// 	constructor(color, peso, rPantalla,rCamara , mRam){
// 		super(color, peso, rPantalla, rCamara, mRam);
// 	}
// }

// class HuaweiH10 extends Celular{
// 	constructor(color, peso, rPantalla,rCamara , mRam){
// 		super(color, peso, rPantalla, rCamara, mRam);
// 	}
// }



// xia.botonDeEncendido();
// xia.tomarFoto();	
// xia.grabar();
// xia.reiniciar();
// xia.botonDeEncendido();

/*sam.botonDeEncendido();
sam.tomarFoto();	
sam.grabar();
sam.reiniciar();
sam.botonDeEncendido();
*/
// hua.info();

