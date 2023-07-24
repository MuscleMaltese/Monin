$(document).ready(function() {
    //main1 슬라이드
    var swiper1 = new Swiper(".swiper1", {
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        allowTouchMove: false
      });

    //main2 슬라이드
    var swiper2 = new Swiper('.swiper2', {
        slidesPerView: 4,
        rewind: true,
        direction: getDirection(),
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        on: {
          resize: function () {
            swiper2.changeDirection(getDirection());
          },
        },
      });
  
      function getDirection() {
        var windowWidth = window.innerWidth;
        var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';
  
        return direction;
      }
    
    //main3 슬라이드
    var swiper3 = new Swiper(".swiper3", {
      // slidesPerView: 3,
      // slidesPerGroup: 3,
      // spaceBetween: 30,
      effect: 'fade',
      loop: true,
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".pageBtn",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    
});