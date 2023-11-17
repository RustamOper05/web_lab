(function() {
  window.addEventListener('load', function() {
    //создаем объект пагинатора
    var swiper = new Swiper(".mySwiper", {
      // тип пагинации
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
      // тип навигации по страницам 
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      mousewheel: {
        sensitivity: 0.1,
      }
    });
  });
})();
