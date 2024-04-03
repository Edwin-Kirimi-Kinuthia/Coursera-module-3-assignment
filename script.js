$(function() {
    // Automatically close the menu in tablet view
    if ($(window).width() >= 768 && $(window).width() <= 991) {
      $('#collapsable-nav').removeClass('in');
    }
  
    // Automatically open the menu in mobile view
    if ($(window).width() <= 767) {
      $('#collapsable-nav').addClass('in');
    }
  
    // Close the mobile menu when clicking outside of it
    $(document).click(function(event) {
      var target = $(event.target);
      if (!target.closest('#header-nav').length && !target.closest('.navbar-toggle').length) {
        $('#collapsable-nav').removeClass('in');
      }
    });
  
    // Show/hide menu items in desktop view
    $(window).resize(function() {
      if ($(window).width() >= 992) { // Desktop view
        $('.navbar-toggle').addClass('collapsed');
        $('.collapse').removeClass('in');
        $('#collapsable-nav').removeClass('in');
      }
    });
  });
  