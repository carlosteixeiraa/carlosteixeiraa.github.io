var alberta = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
var resultado;
var palavras;
alberta.lang = 'pt-Br';
alberta.interimResults = false;
alberta.maxAlternatives = 5;
alberta.start();
// ||

alberta.onresult = function(event) {
    // Salvar resultado
    resultado = event.results[0][0].transcript;
    // Dividir resultado em palavras
    palavras = resultado.split(' ');
    // Corrigir
    corrigir();
    // Mostrar resultado
    document.getElementById('dito').innerHTML = '" ' + resultado + ' "';
    // Outras respostas
    if (resultado == "obrigado alberta" || resultado == "obrigada alberta") {
      albertafala('De nada chefe');
    }
    if (resultado == "bom dia alberta") {
      albertafala('Bom dia chefe');
    }
    if (resultado == "olá alberta") {
      albertafala('Olá chefe');
    }
    // Se a primeira palavra for alberta
    if (palavras[0] == 'alberta') {
      // Alberto ativado
      console.log('Alberta Ouviu!');
      plim.play();
      respostas();
      comandos();
    }
    // fim onresult
  }

alberta.onend = function() {
  alberta.start();
}
