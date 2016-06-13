// Ejercicios diagrama de flujos y pseudocodigo

//#1 Suma 
/*
var valor1; 
var valor2;
valor1=prompt('ingrese su  primer numero','');
valor2=prompt('ingrese su segundo numero','');
           
var suma= (parseInt(valor1)+ parseInt(valor2));

alert("El total es: "+ suma);
*/


//#2 Promedio de 3 numeros
/*
var numero1;
var numero2;
var numero3;
numero1=prompt("ingrese 1er numero", "");
numero2=prompt("ingrese 2do numero", "");
numero3=prompt("ingrese 3er numero", "");
var suma = (parseInt(numero1)+ parseInt(numero2) + parseInt(numero3));
var promedio;
promedio = (suma / 3);
alert("El promedio de estos 3 numeros es: "+ promedio);
*/


//#3 Calculo Area Triangulo (alturaxbase/2)
/*
var altura;
var base;
altura=prompt("ingrese valor altura", "");
base=prompt("ingrese valor base", "");
var alturaxbase = (parseInt(altura)* parseInt(base));
var area;
area = (alturaxbase / 2);
alert("El area del triangulo es: "+ area);
*/


//#4 Galones de leche (1galon es igual a 3.785 litros)
/*
var litros;
var galon;
litros=prompt("ingrese cantidad de litros", "");
galon = (parseInt (litros)/3785);
alert("Son " + galon + " galones");
*/



//#5 SUELDO
/*
var sueldomensual;
var diassemana;
var horasdia;
sueldomensual = prompt("ingrese su sueldo mensual neto");
diassemana = prompt("ingrese cantidad de días a la semana que trabaja", "");
horasdia = prompt("ingrese cuantas horas al día trabaja", "");
var semana;
semana = (parseInt(sueldomensual)/4);
var sueldodiario;
sueldodiario = (parseInt(semana)/parseInt(diassemana));
var sueldohora;
var sueldohora = (parseInt(sueldodiario)/parseInt(horasdia));
alert("tu sueldo semanal es " + semana + " tu sueldo por día es " + sueldodiario + " y tu sueldo por hora es " + sueldohora);
*/



//#6 MEDIDAS DE TELA METROS (1 pulgada = 0.0254 m)
/*
var metros;
var pulgadas;
metros = prompt("Por avor ingresa los metros", "")
pulgadas = metros / 0.0245;
alert("las pulgadas son: "+ pulgadas);


// O de esta manera con un function o caja de js
function metros_a_pulgadas (metros) {
	var pulgadas;
	pulgadas = metros / 0.0245;
	return pulgadas;
}

var metros = prompt("Por avor ingresa los metros", "");
var pulgadas = metros_a_pulgadas (metros);
alert("las pulgadas son: "+ pulgadas);
*/



//#7 PINTURAS
/*
var valor;
var metros;
var presupuesto;
valor = prompt("ingrese valor de metro cuadrado", "");
metros = prompt("ingrese metros cuadrados a pintar", "");
presupuesto = (parseInt(valor)* parseInt(metros));
alert("el presupuesto por " + metros + "metros cuadrados es " + presupuesto);
*/


//#8 AUTOBUSES
/*
var costokm;
costokm =prompt("Ingrese gasto en dinero por km","");
var km;
km =prompt("Ingrese cantidad de km del recorrido","");
var pasajeros;
pasajeros =prompt("Ingrese cantidad de pasajeros minimos a trasladar","");
var costoviaje
var valorpasaje;
costoviaje = (parseInt(costokm)*parseInt(km));
valorpasaje = (parseInt(costoviaje)/(pasajeros));
alert("El valor de boleto por pasajero minimo a cobrar es " + valorpasaje);
*/


//#9 LLAMADA
/*
var duracion;
var tarifa;
duracion=prompt("Ingrese duración de su llamada","");
tarifa=prompt("ingrese tarifa de llamada por minuto","");
var costollamada;
costollamada = (parseInt(duracion)*parseInt(tarifa));
alert("El costo de tu llamada es " + costollamada);
*/



//#10 HOTEL
/*
var noches;
var costonoche;
noches = prompt("Ingrese cantidad de noches a alojarse","");
costonoche =prompt("Ingrese costo por la noche","");

var valorestancia;
valorestancia=(parseInt(costonoche)*parseInt(noches));
alert("El valor a pagar por " + noches + " noches es de " + valorestancia);