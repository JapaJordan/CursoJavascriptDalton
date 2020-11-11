let moneyCofla = prompt("Cuanto dinero tienes Cofla: ");
let moneyRoberto = prompt("Cuanto dinero tienes Roberto: ");
let moneyPedro = prompt("Cuanto dinero tienes Pedro: ");
let moneysinTecho;
let ticketLotery = 1.5;

moneyCofla = parseInt(moneyCofla);

if (moneyCofla >= 0.6 && moneyCofla < 1) {
	alert("Comprate el helado de agua $0.6 USD Cofla");
	alert("Tu vuelto seria "+ (moneyCofla - 0.6)+ "USD");
}
else if (moneyCofla >= 1 && moneyCofla < 1.6) {
	alert("Comprate el helado de crema de $1 USD Cofla");
	alert("Tu vuelto es"+ (moneyCofla - 1));	
}
else if (moneyCofla >= 1.6 && moneyCofla < 1.7) {
	alert("Comprate el Bombón helado marca heladix de $1.6 USD Cofla");
	alert("Tu vuelto es"+ (moneyCofla - 1.6)+ "USD");	
}
else if (moneyCofla >= 1.7 && moneyCofla < 1.8) {
	alert("Comprate el Bombón helado marca heladovich de $1.7 USD Cofla");
	alert("Tu vuelto es"+ (moneyCofla - 1.7)+ "USD");	
}
else if (moneyCofla >= 1.8 && moneyCofla < 2.9) {
	alert("Comprate el Bombón helado marca helardo de $1.8 USD Cofla");
	alert("Tu vuelto es"+ (moneyCofla - 1.8)+ "USD");	
}
else if (moneyCofla >= 2.9) {
	alert("Comprate el Potecito de helado con confites o Porte de 1/4 $2.9 USD Cofla");
	alert("Tu vuelto seria "+ (moneyCofla - 2.9)+ "USD");	
}
else{
	alert("Que haces Cofla con $" + moneyCofla + "USD no puedes comprar nada");
}



if (moneyRoberto >= 0.6 && moneyRoberto < 1) {
	alert("Comprate el helado de agua $0.6 USD Roberto");
}
else if (moneyRoberto >= 1 && moneyRoberto < 1.6) {
	alert("Comprate el helado de crema de $1 USD Roberto");	
}
else if (moneyRoberto >= 1.6 && moneyRoberto < 1.7) {
	alert("Comprate el Bombón helado marca heladix de $1.6 USD Roberto");	
}
else if (moneyRoberto >= 1.7 && moneyRoberto < 1.8) {
	alert("Comprate el Bombón helado marca heladovich de $1.7 USD Roberto");	
}
else if (moneyRoberto >= 1.8 && moneyRoberto < 2.9) {
	alert("Comprate el Bombón helado marca helardo de $1.8 USD Roberto");	
}
else if (moneyRoberto >= 2.9) {
	alert("Comprate el Potecito de helado con confites o Porte de 1/4 $2.9 USD Roberto");	
}
else{
	alert("Que haces Roberto con $" + moneyCofla + "USD no puedes comprar nada");
}



if (moneyPedro >= 0.6 && moneyPedro < 1) {
	alert("Comprate el helado de agua $0.6 USD Pedro");
}
else if (moneyPedro >= 1 && moneyPedro < 1.6) {
	alert("Comprate el helado de crema de $1 USD Pedro");	
}
else if (moneyPedro >= 1.6 && moneyPedro < 1.7) {
	alert("Comprate el Bombón helado marca heladix de $1.6 USD Pedro");	
}
else if (moneyPedro >= 1.7 && moneyPedro < 1.8) {
	alert("Comprate el Bombón helado marca heladovich de $1.7 USD Pedro");	
}
else if (moneyPedro >= 1.8 && moneyPedro < 2.9) {
	alert("Comprate el Bombón helado marca helardo de $1.8 USD Pedro");	
}
else if (moneyPedro >= 2.9) {
	alert("Comprate el Potecito de helado con confites o Porte de 1/4 $2.9 USD Pedro");	
}
else{
	alert("Que haces Pedro con $" + moneyCofla + "USD no puedes comprar nada");
}

//-------------------------------------------------------------------------------------------
//Sin Techo
//-------------------------------------------------------------------------------------------

moneysinTecho = moneyCofla;
//alert(moneysinTecho + "moneysinTecho");

numeroBoleto = moneysinTecho / ticketLotery;
//alert(numeroBoleto + "numeroBoleto");
numeroBoleto = parseInt(numeroBoleto)
//alert(numeroBoleto + "numeroBoleto 1");

if (numeroBoleto >= 1) {
	alert(`Amigo de la calle puedes comprarte ` + numeroBoleto +` Boletos`);
	alert("Tu vuelto es "+ (moneysinTecho - (numeroBoleto * ticketLotery) )+ " USD");
	if (numeroBoleto >= 3 ) {
		alert("Regalarsa tu vuelto amigo...???");
	}
}else{
	alert("No te alcanza para comprar ni un Boleto");
}
