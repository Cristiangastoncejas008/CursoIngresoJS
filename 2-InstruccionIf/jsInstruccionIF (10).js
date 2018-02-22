function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	numero = parseInt(Math.random()*(11-1)+1)
	alert(numero)
	if(numero>=9)
	{
		alert("excelente")
	}
	else if(numero>4)
	{
		alert("aprobo")
	}
	else if(numero<4)
	{
		alert("Vamos la proxima que se puede")
	}

	

}//FIN DE LA FUNCIÓN