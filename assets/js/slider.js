var swiper = new Swiper(".swiper-custom", {
        slidesPerView: 1,
        spaceBetween: 25,
        loop: true,
        centerSlide: 'true',
        fade: 'true',
        grabCursor: 'true',
        autoplay: {
          delay: 5000,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          520: {
            slidesPerView: 1,
          },
          950: {
            slidesPerView: 1,
          },
        },
      });

var myModal = document.getElementById('staticBackdrop');
var modal = bootstrap.Modal.getOrCreateInstance(myModal)
modal.show()