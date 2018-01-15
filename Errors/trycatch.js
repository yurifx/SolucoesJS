//Lan�ando exce��es:

throw "Error2";   // tipo string
throw 42;         // tipo num�rico
throw true;       // tipo booleano
throw {toString: function() { return "Eu sou um objeto!"; } };


// Usando Try Catch

try { // statements to try
  monthName = getMonthName(myMonth); // fun��o poderia lan�ar uma exce��o
}
catch (e) {
  monthName = "unknown";
  logMyErrors(e); // passa a exce��o para o manipulador de erro -> sua fun��o local.
}