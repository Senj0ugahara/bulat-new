const swiper = new Swiper('.video-reviews__swiper', {
  loop: true,
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 30,

  navigation: {
    nextEl: '.video-reviews__button-next',
    prevEl: '.video-reviews__button-prev',
  },
});