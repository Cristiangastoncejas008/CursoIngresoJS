function Mostrar()
{

var sexo = prompt("ingrese f o m")

    

document.getElementById('Sexo').value=sexo;
while(sexo!="f" && sexo!="m")
{
    sexo = prompt("ingrese f o m");
}


}//FIN DE LA FUNCIÓN