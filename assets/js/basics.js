"use strict";

if (window.jQuery) {
  $(document).ready(function () {
    const $title = $("#selector-title");
    const $copy = $(".selector-copy");
    const $html = $("#selector-html");
    // find("span") is a tag selector scoped to this demo.
    const $tags = $(".tag-demo").find("span");
    const $feedback = $("#selector-feedback");

    $("#change-text").on("click", function () {
      $title.text("Selected by ID.");
      $feedback.text(".text() changed #selector-title using an ID selector.");
    });

    $("#change-html").on("click", function () {
      // This HTML is a fixed string, never user input.
      $html.html("A little <strong>extra emphasis.</strong>");
      $feedback.text(".html() inserted a real <strong> element.");
    });

    $("#change-style").on("click", function () {
      $copy.css({ color: "#aa492c", fontWeight: "600" });
      $tags.css({ backgroundColor: "#f4ded4", color: "#84391f" });
      $feedback.text(".css() styled the class selection and the span tag selection.");
    });

    $("#reset-selectors").on("click", function () {
      $title.text("Hello, jQuery.");
      $copy.removeAttr("style");
      $tags.removeAttr("style");
      $html.text("This line can contain HTML.");
      $feedback.text("Canvas reset. Try another selection.");
    });
  });
}
