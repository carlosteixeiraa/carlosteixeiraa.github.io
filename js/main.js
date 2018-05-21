AOS.init();

var key = 0;
$('#burguer').on('click', () => {
    if(key == 0) {
        $('.menur').fadeIn(300);
        key = 1;
    } else {
        $('.menur').fadeOut(300);
        key = 0;
    }
})

$(document).ready(function() {
  $('nav a[href*=\\#]').bind('click', function(e) {
    e.preventDefault(); 
    var target = $(this).attr("href"); 

    $('html, body').stop().animate({
      scrollTop: ( $(target).offset().top - 100 ) 
    }, 600, function() {
      location.hash = target;
    });

    return false;
  });
});

var img = true;
$('#easteregg').on('click', () => {
  if(img == true) {
    $('#easteregg').attr('src', 'media/me.png');
    img = false;
  } else {
    $('#easteregg').attr('src', 'media/me.jpeg');
    img = true;
  }
});