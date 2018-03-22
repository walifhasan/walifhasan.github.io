// Ripple Effect
jQuery(document).ready(function() {
  "use strict";

  $(".slider").ripples({
    resolution: 512,
    dropRadius: 10,
    perturbance: 0.02
  });

  // Dynamic Nav bg color
  $(window).scroll(function() {
    var top = $(window).scrollTop();

    if (top > 500) {
      $("header").addClass("transparent-bg");
    } else {
      if ($("header").hasClass("transparent-bg")) {
        $("header").removeClass("transparent-bg");
      }
    }
  });
});

// Typewriter Effect
var typed = new Typed(".text", {
  strings: [
    "We are <strong class='primary'>EMPEIROS</strong>",
    "We are <strong class='secondary'>FUTURE</strong>"
  ],
  typeSpeed: 80,
  loop: true
});
