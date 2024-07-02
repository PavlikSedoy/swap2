// core version + navigation, pagination modules:
import Swiper, { Navigation } from 'swiper'

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