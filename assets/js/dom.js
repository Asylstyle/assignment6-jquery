"use strict";

if (window.jQuery) {
  $(document).ready(function () {
    const $list = $("#item-list");
    let nextItemNumber = 4;

    function updateList(message) {
      const count = $list.children("li").length;
      $("#item-count").text(count + (count === 1 ? " item" : " items"));
      $("#remove-item").prop("disabled", count === 0);
      $("#list-status").text(message);
    }

    function createItem() {
      const $item = $("<li>").text("New perspective " + nextItemNumber);
      nextItemNumber += 1;
      return $item;
    }

    $("#append-item").on("click", function () {
      $list.append(createItem());
      updateList("Appended a new item at the end.");
    });
    $("#prepend-item").on("click", function () {
      $list.prepend(createItem());
      updateList("Prepended a new item at the beginning.");
    });
    $("#remove-item").on("click", function () {
      $list.children("li").last().remove();
      updateList("Removed the last item.");
    });

    const images = [
      {
        src: "assets/images/coast.svg",
        name: "Coastal morning",
        alt: "A quiet blue coast with layered sea cliffs",
      },
      {
        src: "assets/images/dunes.svg",
        name: "Desert afterglow",
        alt: "Terracotta dunes beneath a warm evening sky",
      },
    ];
    let imageIndex = 0;
    $("#change-image").on("click", function () {
      imageIndex = (imageIndex + 1) % images.length;
      const image = images[imageIndex];
      $("#attribute-image").attr({ src: image.src, alt: image.alt });
      $("#image-name").text(image.name);
      $("#image-path").text(image.src);
    });

    const links = [
      { href: "https://api.jquery.com/", label: "Open jQuery API ↗" },
      {
        href: "https://learn.jquery.com/",
        label: "Open jQuery Learning Center ↗",
      },
    ];
    let linkIndex = 0;
    $("#change-link").on("click", function () {
      linkIndex = (linkIndex + 1) % links.length;
      const link = links[linkIndex];
      $("#resource-link").attr("href", link.href).text(link.label);
      $("#link-destination").text(link.href);
    });

    $("#profile-name").on("input", function () {
      $("#preview-name").text($(this).val() || "Your name");
    });
    $("#profile-email").on("input", function () {
      $("#preview-email").text($(this).val() || "you@example.com");
    });
    $("#profile-form").on("submit", function (event) {
      event.preventDefault();
    });
  });
}
