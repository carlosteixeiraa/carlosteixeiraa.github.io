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
    document.getElementById('dito').innerHTML = resultado;
    console.log('O chefe disse - ' + resultado);
    // Dividir resultado em palavras
    palavras = resultado.split(' ');
    // Se as palavras forem obrigado/a alberta
    if (resultado == "obrigado alberta" || resultado == "obrigada alberta") {
      albertafala('De nada chefe');
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
