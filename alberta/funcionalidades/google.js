var linkabre;
function googlee() {
// Criar Url
var cxkey = '001132580745589424302:jbscnf14_dw';
var linkgoogle = 'https://www.googleapis.com/customsearch/v1?key=AIzaSyA0dRdEYJaFVpkRj4ZxBiWUOMZ50yfY380&cx=' + cxkey + '&q='
var linkcom = linkgoogle + querygoogle
// JSON numa var
var json = (function () {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': linkcom,
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
})();

var id = json.items[0].link
linkabre = id;
// fim função
}
