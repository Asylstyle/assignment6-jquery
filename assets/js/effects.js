"use strict";

if (window.jQuery) {
  $(document).ready(function () {
    const duration = 400;
    const $paragraph = $("#visibility-paragraph");
    const $image = $("#fade-image");
    const $panel = $("#slide-panel");

    function updateVisibilityStatus() {
      const state = $paragraph.is(":visible") ? "visible" : "hidden";
      $("#visibility-status").text("The paragraph is " + state + ".");
    }

    function updateFadeStatus() {
      const state = $image.is(":visible") ? "visible" : "hidden";
      $("#fade-status").text("The image is " + state + ".");
    }

    function updateSlideStatus() {
      const isExpanded = $panel.is(":visible");
      $("#slide-toggle").attr("aria-expanded", String(isExpanded));
      $("#slide-status").text(isExpanded ? "The panel is expanded." : "The panel is collapsed.");
    }

    $("#hide-paragraph").on("click", function () {
      $paragraph.hide();
      updateVisibilityStatus();
    });
    $("#show-paragraph").on("click", function () {
      $paragraph.show();
      updateVisibilityStatus();
    });
    $("#toggle-paragraph").on("click", function () {
      $paragraph.toggle();
      updateVisibilityStatus();
    });

    // Finish the current effect and clear queued clicks before starting another.
    $("#fade-out").on("click", function () {
      $image.stop(true, true).fadeOut(duration, updateFadeStatus);
    });
    $("#fade-in").on("click", function () {
      $image.stop(true, true).fadeIn(duration, updateFadeStatus);
    });
    $("#fade-toggle").on("click", function () {
      $image.stop(true, true).fadeToggle(duration, updateFadeStatus);
    });

    $("#slide-up").on("click", function () {
      $panel.stop(true, true).slideUp(duration, updateSlideStatus);
    });
    $("#slide-down").on("click", function () {
      $panel.stop(true, true).slideDown(duration, updateSlideStatus);
    });
    $("#slide-toggle").on("click", function () {
      $panel.stop(true, true).slideToggle(duration, updateSlideStatus);
    });
  });
}
