function respostas() {
  // Estas ai?
  if (resultado == "alberta estás aí") {
    albertafala('Sim estou');
  }
  // Tudo bem?
  if (resultado == "alberta tudo bem") {
    albertafala('Sim chefe e consigo?');
  }
  // Como te chamas?
  if (resultado == "alberta como te chamas" || resultado == "alberta como é que te chamas" || resultado == "alberta qual é o teu nome") {
    albertafala('O nome que o chefe me deu é Alberta');
  }
  // Como te chamas?
  if (resultado == "alberta onde estás") {
    albertafala('Estou sempre aqui para si chefe');
  }
  // Quem te criou?
  if (resultado == "alberta quem te criou" || resultado == "alberta quem é o teu pai" || resultado == "alberta quem é o teu criador") {
    albertafala('O grande Carlos Teixeira');
  }
  // Quando nasceste?
  if (resultado == "alberta quando nasceste" || resultado == "alberta quando é que nasceste" || resultado == "alberta quando é que fostes criado") {
    albertafala('No dia 21 de outubro de 2017');
  }
  // Toca piano
  if (resultado == "alberta toca piano") {
    piano.play();
  }
  // fim função
}
