var linkmusica;
function youtube() {
// Criar Url
var linkyt = 'https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&key=AIzaSyCrNJDs2MLVVh2jSXIyEG0OFlsYxCQ6avM&q='
var linkco = linkyt + queryt
// JSON numa var
var json = (function () {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': linkco,
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
})();

var id = json.items[0].id.videoId
linkmusica = 'https://www.youtube.com/watch?v=' + id
// fim função
}
