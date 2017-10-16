// Query JS
var queryjs = (function(a) {
    if (a == "") return {};
    var b = {};
    for (var i = 0; i < a.length; ++i)
    {
        var p=a[i].split('=', 2);
        if (p.length == 1)
            b[p[0]] = "";
        else
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
})(window.location.search.substr(1).split('&'));
// Verificar length
var nome = queryjs['nome'];
if (nome == "") {
	nome = "QueryJS";
}
if (nome.length > 16) {
	nome = "Muito Grande";
}
var valin;
// Obter valor input
function vai() {
	valin = document.getElementById("inpt").value
	if (valin == "") {
		valin = "QueryJS";
	}
}
// Butão
function bte() {
	vai();
	window.location.href = "index.html" + "?nome=" + valin
}
// Mostrar
function mostrar() {
	document.getElementById("nome").innerHTML = nome;
}
mostrar();
