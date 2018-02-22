function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta="si";
	var numero = prompt("ingrese un numero");


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

while(respuesta=="si")
{
contador++;
numero = prompt();
numero = parseInt(numero);
acumulador = acumulador + numero;

if(isNaN(numero)




}
alert(acumulador);
respuesta = prompt("desea continuar")





}//FIN DE LA FUNCIÓN