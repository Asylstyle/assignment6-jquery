"use strict";

if (window.jQuery) {
  $(document).ready(function () {
    const original = { left: 20, top: 20, width: 64, height: 64, opacity: 1 };

    function resetBox(name) {
      $("#" + name + "-box").stop(true, false).css(original);
      $("#run-" + name).prop("disabled", false);
      $("#" + name + "-status").text("Ready to move.");
    }

    function prepareAnimation(name, largestSize) {
      resetBox(name);
      $("#run-" + name).prop("disabled", true);
      $("#" + name + "-status").text("Animation running…");
      const $stage = $("#" + name + "-stage");
      // Measure the stage so squares stay inside it on small screens.
      return {
        left: Math.max(20, Math.min(240, $stage.width() - largestSize - 20)),
        top: Math.max(20, Math.min(120, $stage.height() - largestSize - 20))
      };
    }

    function finishAnimation(name, message) {
      $("#run-" + name).prop("disabled", false);
      $("#" + name + "-status").text(message);
    }

    $("#run-basic").on("click", function () {
      const target = prepareAnimation("basic", 112);
      $("#basic-box").animate({ left: target.left, top: 40, width: 112, height: 112 }, 650, function () {
        finishAnimation("basic", "Complete. Position and size changed together.");
      });
    });

    $("#run-sequence").on("click", function () {
      const target = prepareAnimation("sequence", 64);
      // Chained animate calls enter jQuery's default effects queue in order.
      $("#sequence-box")
        .animate({ left: target.left }, 450)
        .animate({ top: target.top }, 450)
        .animate({ width: 36, height: 36 }, 450)
        .animate(original, 450, function () {
          finishAnimation("sequence", "Complete. Right → down → shrink → original.");
        });
    });

    $("#run-combined").on("click", function () {
      const target = prepareAnimation("combined", 112);
      // All numeric properties animate simultaneously in this single call.
      $("#combined-box").animate({
        left: target.left, top: target.top,
        width: 112, height: 112, opacity: 0.4
      }, 800, function () {
        finishAnimation("combined", "Complete. Movement, size, and opacity changed together.");
      });
    });

    ["basic", "sequence", "combined"].forEach(function (name) {
      $("#reset-" + name).on("click", function () {
        resetBox(name);
      });
    });

    $(window).on("resize", function () {
      ["basic", "sequence", "combined"].forEach(resetBox);
    });
  });
}
