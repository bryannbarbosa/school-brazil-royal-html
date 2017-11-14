jQuery(window).scroll(function() {

  if($(window).width() > 768){
    if($(document).scrollTop() > 100){

      $('nav').removeClass('navbar-default');
      $('nav').addClass('navbar-default2-index');
      $('#nav1').removeClass('navbar-fixed-top');
      $('#nav1').addClass('navbar-fixed-top2');
      $('#ul1').removeClass('navbar-right');
      $('#ul1').addClass('navbar-right2');

      $('nav').addClass('fadeInDown');
    }

    else {

      $('nav').removeClass('navbar-default2-index');
      $('nav').addClass('navbar-default');
      $('#nav1').removeClass('navbar-fixed-top2');
      $('#nav1').addClass('navbar-fixed-top');
      $('#ul1').addClass('navbar-right');
      $('#ul1').removeClass('navbar-right2');

      $('nav').removeClass('fadeInDown');
    }

  }
});

jQuery(window).on('resize', function() {
  if($(window).width() < 768){
      $('nav').removeClass('navbar-fixed-top');
      $('nav').removeClass('navbar-fixed-top2');
      $('nav').removeClass('navbar-default2-index');
      $('#ul1').removeClass('navbar-right2');
      $('nav').addClass('navbar-default');
      $('#ul1').addClass('navbar-right');
  }
});
jQuery(window).on('load', function() {
  if($(window).width() < 768){
      $('nav').removeClass('navbar-fixed-top');
  }
});