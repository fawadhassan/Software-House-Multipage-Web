
import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

// init Swiper:
const swiper = new Swiper(" .team-slider", {
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    spaceBetween:20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      700: {
        slidesPerView: 2
      },
      1000: {
        slidesPerView: 3
      },
    
  }
});

