new Swiper(".galary_image", {
  slidesPerView: 4,
});

if (iosVersion >= 7) {
  $(document).scroll(function () {
    $("#main").css(
      "background-position",
      "0px " + $(document).scrollTop() + "px"
    );
  });
}
