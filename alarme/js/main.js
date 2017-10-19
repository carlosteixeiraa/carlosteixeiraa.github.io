// Declaração Variaveis
var data;
var horas;
var minutos;
var segundos;
// Prompts
var halarme = prompt("A que horas o alarme vai tocar?");
var malarme = prompt("E a que minutos?");
var nota = prompt("Qual é a nota do alarme?");
// Checar tempo do alarme
halarme = verTempo(halarme);
malarme = verTempo(malarme);
// Toque Alarme
var toque = new Audio("alarme.wav");

// Obter Tempo
function tempo() {
  data = new Date();
  horas = data.getHours();
  minutos = data.getMinutes();
  segundos = data.getSeconds();
  minutos = verTempo(minutos);
  segundos = verTempo(segundos);
  document.getElementById("tempo").innerHTML = horas + ":" + minutos + ":" + segundos;
  var t = setTimeout(tempo, 1000);
}
// Checar Tempo
function verTempo(i) {
  if (i < 10) {
    i = "0" + i
  };
  return i;
}

// Alarme
function alarme() {
  // Ver se ta na hora
  if (horas == halarme && minutos == malarme) {
    // Fazer Tocar
    toque.play();
    // Mostrar nota
    setTimeout(function() {
      document.getElementById("alarme").innerHTML = nota;
    }, 1000);
    // Retirar nota
    setTimeout(function() {
      document.getElementById("alarme").innerHTML = " ";
    }, 500);
    // Quando já não tiver na hora
  } else {
    toque.pause();
    document.getElementById("alarme").innerHTML = " ";
  }
}
// Chamar o alarme a cada 1 segundo
var talarme = setInterval(alarme, 1000);
