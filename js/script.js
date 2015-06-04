$(document).ready(function() {


  // page transitions
  var main = $('.main');

  main.css('display', 'none');

  main.fadeIn(500);

  $('a.transition').click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        main.fadeOut(500, redirectPage);
    });

    function redirectPage() {
        window.location = linkLocation;
    }


  // scroll action
  $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 1000, 'swing', function () {
          window.location.hash = target;
      });
  });



});
