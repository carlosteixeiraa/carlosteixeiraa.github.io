var plim = new Audio('sons/plim.wav');
var piano = new Audio('sons/piano.mp3');

// Alberta Fala
function albertafala(texto) {
  VoiceRSS.speech({
    key: '25d3f17abcf241558fba8c2ad8fbe972',
    src: texto,
    hl: 'pt-PT',
    r: 0,
    c: 'mp3',
    f: '44khz_16bit_stereo',
    ssml: false
});
}
