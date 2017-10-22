function comandos() {
  // Se comando for procura, procurar no google
  if (palavras[1] == "procura" || palavras[1] == "pesquisa" || palavras[1] == "pesquisar") {
    procurar();
  }
  // Se comando for recarrega
  if (palavras[1] == "recarrega" || palavras[1] == "reinicia") {
    location.reload();
  }
  // Se comando for toca, procurar no youtube
  if (palavras[1] == "toca") {
    tocar();
  }
  // Se comando for onde, procurar no google maps
  if (palavras[1] == "onde") {
    onde();
  }
  // Se comando for quero, procurar no youtube
  if (palavras[1] == "quero" || palavras[1] == "preciso" && palavras[2] == "de") {
    quero();
  }
  // Se comando for que horas são
  if (palavras [1] == "que" && palavras[2] == "horas" && palavras[3] == "são") {
    horas();
  }
  // Se comando for que horas são
  if (palavras [1] == "que" && palavras[2] == "dia" && palavras[3] == "é" && palavras[4] == "hoje") {
    dia();
  }
  // Se comando for que mes é
  if (palavras [1] == "estamos" && palavras[2] == "em" && palavras[3] == "que" && palavras[4] == "mês") {
    mes();
  }
  // Como está o tempo
  if (palavras [1] == "como" && palavras[2] == "está" && palavras[3] == "o" && palavras[4] == "tempo") {
    tempo();
  }
  // Conta
  if (palavras [1] == "conta" && palavras[2] == "até") {
    conta();
  }
  // fim função
}
