// $(document).foundation();

// Menü
// Untermenü
$('#main-menu').children('.has-sub').children('a').click(function(e) {
  e.preventDefault();

  var parent = $(this).parent(),
  sub = parent.children('.sub-menu');

  if (parent.hasClass('open')) {
    parent.removeClass('open');
    sub.slideUp('fast');
  } else {

    open_menu = $('#main-menu').find('.open');

    if (open_menu.length > 0) {
      open_menu.removeClass('open').children('.sub-nav').slideUp('fast', function() {
        parent.addClass('open');
        sub.slideDown('fast');
      });
    } else {
      parent.addClass('open');
      sub.slideDown('fast');
    }

  }
});
