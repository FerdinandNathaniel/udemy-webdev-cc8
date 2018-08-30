(function ($) {
  window.fnames = new Array();
  window.ftypes = new Array();
  fnames[0] = 'EMAIL';
  ftypes[0] = 'email';
  fnames[1] = 'FNAME';
  ftypes[1] = 'text';
  fnames[2] = 'LNAME';
  ftypes[2] = 'text';
  fnames[3] = 'ADDRESS';
  ftypes[3] = 'address';
  fnames[4] = 'PHONE';
  ftypes[4] = 'phone';
}
  (jQuery));

/* ========== Email Set-up, making fields required ========== */
// TO-DO: make this work, doesn't atm
document.getElementById("mce-EMAIL").required = true;
document.getElementById('mce-FNAME').required = true;
document.getElementById('mce-LNAME').required = true;

/* ========== Creating various scroll speeds ========== */
$.fn.moveIt = function () {
  var $window = $(window);
  var instances = [];

  $(this).each(function () {
    instances.push(new moveItItem($(this)));
  });

  window.addEventListener('scroll', function () {
    var scrollTop = $window.scrollTop();
    instances.forEach(function (inst) {
      inst.update(scrollTop);
    });
  }, { passive: true });
}

var moveItItem = function (el) {
  this.el = $(el);
  this.speed = parseInt(this.el.attr('data-scroll-speed'));
};

moveItItem.prototype.update = function (scrollTop) {
  this.el.css('transform', 'translateY(' + -(scrollTop / this.speed) + 'px)');
};

// Initialization
$(function () {
  $('[data-scroll-speed]').moveIt();
});

/* ========== Check if element is in visible viewport ========== */
(function ($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function (partial) {

    var $t = $(this),
      $w = $(window),
      viewTop = $w.scrollTop(),
      viewBottom = viewTop + $w.height(),
      _top = $t.offset().top,
      _bottom = _top + $t.height(),
      compareTop = partial === true ? _bottom : _top,
      compareBottom = partial === true ? _top : _bottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };

})(jQuery);

$(window).scroll(function(event) {
  
  $(".module").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in"); 
    } 
  });
  
});