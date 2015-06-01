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
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
  });


  function showSpecials() {
    messageArea.fadeIn('slow');
    $('.slogan').hide();
    $('.main').hide();
  }

  function closeSpecials() {
    messageArea.fadeOut('slow');
    $('.slogan').fadeIn('slow');
    $('.main').fadeIn('slow');
  }

});
