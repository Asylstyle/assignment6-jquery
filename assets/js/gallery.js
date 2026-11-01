"use strict";

if (window.jQuery) {
  $(document).ready(function () {
    const $thumbnails = $(".gallery-thumbnail");
    const $viewer = $("#gallery-viewer");
    const $main = $("main");
    let activeIndex = 0;
    let previousFocus = null;

    function updateGalleryStatus() {
      const isVisible = $thumbnails.first().is(":visible");
      $("#toggle-thumbnails")
        .text(isVisible ? "Hide thumbnails" : "Show thumbnails")
        .attr("aria-expanded", String(isVisible));
      $("#gallery-status").text(
        isVisible
          ? "4 landscapes. Select an image to enlarge it."
          : "Thumbnails hidden. Show them to explore the collection.",
      );
    }

    $("#toggle-thumbnails").on("click", function () {
      $thumbnails
        .stop(true, true)
        .fadeToggle(300)
        .promise()
        .done(updateGalleryStatus);
    });

    function showImage(index) {
      activeIndex = (index + $thumbnails.length) % $thumbnails.length;
      const $thumbnail = $thumbnails.eq(activeIndex);
      $("#viewer-image").attr({
        src: $thumbnail.data("image"),
        alt: $thumbnail.data("alt"),
      });
      $("#viewer-title").text($thumbnail.data("title"));
      $("#viewer-description").text($thumbnail.data("description"));
      $("#viewer-number").text($thumbnail.data("number") + " / 04");
    }

    function openViewer(index, trigger) {
      previousFocus = trigger;
      showImage(index);
      $("body").addClass("viewer-open");
      // The dialog is inside main, so only its sibling content becomes inert.
      $main.children().not($viewer).prop("inert", true);
      $(".site-header, .site-footer, .skip-link").prop("inert", true);
      $viewer.stop(true, true).fadeIn(250, function () {
        $("#close-viewer").trigger("focus");
      });
    }

    function closeViewer() {
      $viewer.stop(true, true).fadeOut(200, function () {
        $("body").removeClass("viewer-open");
        $main.children().not($viewer).prop("inert", false);
        $(".site-header, .site-footer, .skip-link").prop("inert", false);
        if (previousFocus) previousFocus.focus();
      });
    }

    $thumbnails.on("click", function () {
      openViewer($thumbnails.index(this), this);
    });
    $("#close-viewer").on("click", closeViewer);
    $("#previous-image").on("click", function () {
      showImage(activeIndex - 1);
    });
    $("#next-image").on("click", function () {
      showImage(activeIndex + 1);
    });
    $viewer.on("click", function (event) {
      if (event.target === this) closeViewer();
    });

    $(document).on("keydown", function (event) {
      if (!$viewer.is(":visible")) return;
      if (event.key === "Escape") closeViewer();
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showImage(activeIndex - 1);
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        showImage(activeIndex + 1);
      }
      if (event.key === "Tab") {
        const $buttons = $viewer.find("button");
        const first = $buttons.first()[0];
        const last = $buttons.last()[0];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    });
  });
}
