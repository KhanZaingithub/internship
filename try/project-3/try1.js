$(document).ready(function () {
  function initCarousel() {
    if ($("#visible").css("display") == "block") {
      $(".carousel .carousel-item").each(function () {
        var i = $(this).next();
        i.length || (i = $(this).siblings(":first")),
          i.children(":first-child").clone().appendTo($(this));

        for (var n = 0; n < 4; n++)
          (i = i.next()).length || (i = $(this).siblings(":first")),
            i.children(":first-child").clone().appendTo($(this));
      });
    }
  }
  $(window).on({
    resize: initCarousel(),
    load: initCarousel(),
  });
});
