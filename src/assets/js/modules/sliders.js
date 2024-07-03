// core version + navigation, pagination modules:
import 'swiper/swiper-bundle.css';
import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'

// init Swiper:
new Swiper('#homeScreenSlider', {
  // configure Swiper to use modules
  modules: [Navigation],
  // Navigation arrows
  navigation: {
    nextEl: '#homeScreenSlider-next',
    prevEl: '#homeScreenSlider-prev',
  },
})