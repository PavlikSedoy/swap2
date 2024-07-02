import Swiper, { Navigation } from 'swiper'

// Rooms
new Swiper('#roomsSlider', {
    modules: [Navigation],
    
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 15,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        1200: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 0,
        },
        992: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 20,
        }
    }
})

// Amenities
new Swiper('#amenitiesSlider', {
    modules: [Navigation],
    
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: '.amenities__arrow--next',
        prevEl: '.amenities__arrow--prev',
    },

    breakpoints: {
        1200: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 0,
        },
        992: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 20,
        }
    }
})