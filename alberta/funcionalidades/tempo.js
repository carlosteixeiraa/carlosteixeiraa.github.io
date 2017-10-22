// Obter Horas
function horas() {
  albertafala('São horas do chefe comprar um relógio');
  var link = 'http://www.google.com/search?q=comprar relógio';
  window.open(link,'_blank');
}

// Obter tempo
function tempo() {
  var tempo = 'sol';
  albertafala('Hoje está ' + tempo);
}

// Obter dia
function dia() {
  var data = new Date();
  var dia = data.getDate();
  albertafala('Hoje é dia ' + dia);
}
// Obter Mes
function mes() {
  var data = new Date();
  var mes = data.getMonth();
  if (mes == 0) {
    albertafala('Estamos em Janeiro');
  }
  if (mes == 1) {
    albertafala('Estamos em Fevereiro');
  }
  if (mes == 2) {
    albertafala('Estamos em Março');
  }
  if (mes == 3) {
    albertafala('Estamos em Abril');
  }
  if (mes == 4) {
    albertafala('Estamos em Maio');
  }
  if (mes == 5) {
    albertafala('Estamos em Junho');
  }
  if (mes == 6) {
    albertafala('Estamos em Julho');
  }
  if (mes == 7) {
    albertafala('Estamos em Agosto');
  }
  if (mes == 8) {
    albertafala('Estamos em Setembro');
  }
  if (mes == 9) {
    albertafala('Estamos em Outubro');
  }
  if (mes == 10) {
    albertafala('Estamos em Novembro');
  }
  if (mes == 11) {
    albertafala('Estamos em Dezembro');
  }

}
