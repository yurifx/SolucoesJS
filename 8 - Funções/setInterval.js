keys: setInterval, intervalo, tempo, interval, intevalo, setintevalo, tempo


//Define um tempo de execu��o para execu��o intermin�vel
var numThread  = setInteval (function(){console.log("oi");}, 3000);


//o x retorna o n�mero desta thread.

//para cancelar esta thread, voc� coloca a fun��o:
clearInterval(numThread);



