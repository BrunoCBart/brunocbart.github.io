$(document).ready(function () {
  const scrollLink = $(".scroll");

  //Smooth scrolling
  scrollLink.click(function (e) {
    e.preventDefault();
    $("body,html").animate({
      scrollTop: $(this.hash).offset().top,
    });
  });

  // Active link switching
  $(window).scroll(function () {
    const scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function () {
      const sectionOffset = $(this.hash).offset().top;

      if (sectionOffset <= scrollbarLocation + 350) {
        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");
      }
    });
  });
});