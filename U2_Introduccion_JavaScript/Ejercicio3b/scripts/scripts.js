//U1T3 - Comparación II - Salvador Muñoz Cordero

//Variables

var operacion1 = null == undefined;
var operacion2 = "NaN" == NaN;
var operacion3 = 5 == NaN;
var operacion4 = NaN == NaN;
var operacion5 = NaN != NaN;
var operacion6 = false == 0;
var operacion7 = true == 1;
var operacion8 = true == 2;
var operacion9 = undefined == 0;
var operacion10 = null == 0;
var operacion11 = "5" == 5;

//Mensajes mostrando el valor de las variables

alert("La operación (null == undefined) es" + " " + operacion1);
//El resultado true porque son lo mismo.

alert("La operación ('NaN' == NaN) es" + " " + operacion2);
//El resultado es false ya que uno es una cadena.

alert("La operación (5 == NaN) es" + " " + operacion3);
//El resultado es false porque uno es un número y el otro es una propiedad de alto nivel que indica que no es un numero.

alert("La operación (NaN == NaN) es" + " " + operacion4);
//El resultado es false porque no tiene valor específico, es incomparable consigo mismo.

alert("La operación (NaN != NaN) es" + " " + operacion5);
//

alert("La operación (false == 0) es" + " " + operacion6);
//

alert("La operación (true == 1) es" + " " + operacion7);
//

alert("La operación (true == 2) es" + " " + operacion8);
//

alert("La operación (undefined == 0) es" + " " + operacion8);
//

alert("La operación (null == 0) es" + " " + operacion8);
//

alert("La operación ('5' == 5) es" + " " + operacion8);
//