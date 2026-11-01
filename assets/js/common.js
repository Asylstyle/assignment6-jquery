"use strict";

// Every page loads the full jQuery build from the CDN before this script.
if (!window.jQuery) {
  document.getElementById("library-error").hidden = false;
  document.querySelectorAll("button").forEach(function (button) {
    button.disabled = true;
  });
} else {
  $(document).ready(function () {
    console.log("jQuery is ready!");
    $("#ready-status").text("jQuery is ready!");
    $("#jquery-version").text("v" + $.fn.jquery);

    // The examples remain usable for visitors who prefer reduced motion.
    $.fx.off = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });
}
