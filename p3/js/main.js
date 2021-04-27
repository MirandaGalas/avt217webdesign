$(document).ready(function() {
    // run function on initial page load
	door();
});
function door() {
  $('.orange').dblclick(function() {
    $('.orange').addClass('hide');
    $('body').removeClass('orange-bg');
    $('.blue').removeClass('hide');
    $('body').addClass('blue-bg');
  });
  $('.blue').dblclick(function() {
    $('.blue').addClass('hide');
    $('body').removeClass('blue-bg');
    $('.white').removeClass('hide');
    $('body').addClass('white-bg');
  });
  $('.white').dblclick(function() {
    $('.white').addClass('hide');
    $('body').removeClass('white-bg');
    $('.purple').removeClass('hide');
    $('body').addClass('purple-bg');
  });
  $('.purple').dblclick(function() {
    $('.purple').addClass('hide');
    $('body').removeClass('purple-bg');
    $('.yellow').removeClass('hide');
    $('body').addClass('yellow-bg');
  });
  $('.yellow').dblclick(function() {
    $('.yellow').addClass('hide');
    $('body').removeClass('yellow-bg');
    $('.brown').removeClass('hide');
    $('body').addClass('brown-bg');
  });
  $('.brown').dblclick(function() {
    $('.brown').addClass('hide');
    $('body').removeClass('brown-bg');
    $('.pink').removeClass('hide');
    $('body').addClass('pink-bg');
  });
  $('.pink').dblclick(function() {
    $('.pink').addClass('hide');
    $('body').removeClass('pink-bg');
    $('.green').removeClass('hide');
    $('body').addClass('green-bg');
  });
  $('.green').dblclick(function() {
    $('.green').addClass('hide');
    $('body').removeClass('green-bg');
    $('.red').removeClass('hide');
    $('body').addClass('red-bg');
  });
  $('.red').dblclick(function() {
    $('.red').addClass('hide');
    $('body').removeClass('red-bg');
    $('.black').removeClass('hide');
    $('body').addClass('black-bg');
  });
  $('.black').dblclick(function() {
    $('.black').addClass('hide');
    $('body').removeClass('black-bg');
    $('.orange').removeClass('hide');
    $('body').addClass('orange-bg');
  });
}
