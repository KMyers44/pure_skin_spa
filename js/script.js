$(document).ready(function() {

  var messageArea = $('.message-area');
  var icon         = $('.icon');


  // make message_area appear
  $('.specials').on('click', function() {
    showSpecials();
  });


  // close message_area
  $(icon).on('click', function() {
    closeSpecials();
  });


  // scroll on treatment items click
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


  function showSpecials() {
    messageArea.fadeIn('slow');
    $(messageArea).css(
        'margin-top', '120px'
      );
    $('.slogan').hide();
    $('.main').hide();
  }

  function closeSpecials() {
    messageArea.fadeOut('slow');
    $('header').css(
      'position', 'fixed'
      );
    $('header').css(
      'padding-top', '100px'
      );
    $('.slogan').fadeIn('slow');
    $('.main').fadeIn('slow');
  }

});
