const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 3,
    spaceBetweeen: 10,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
   });