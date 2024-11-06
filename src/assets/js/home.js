import 'normalize.css';
import '@styles/index.scss'
import PlayPreviewController from './classes/PlayPreviewController'
import 'swiper/css'
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

new Swiper('#homeScreenSlider', {
    modules: [Navigation],
    navigation: {
        prevEl: '#homeScreenSlider-prev',
        nextEl: '#homeScreenSlider-next'
    }
})

// Video play
if (document.querySelector('.videos-preview')) {
    const PlayPausePreview = new PlayPreviewController(document.querySelector('.videos-preview'))
    PlayPausePreview.playPause()
}

if (document.querySelector('.best-scenes__list')) {
    const PlayPauseBestScenes = new PlayPreviewController(document.querySelector('.best-scenes__list'))
    PlayPauseBestScenes.playPause()
}

if (document.querySelector('.video__other')) {
    const PlayPauseBestScenes = new PlayPreviewController(document.querySelectorAll('.best-scenes__list')[1])
    PlayPauseBestScenes.playPause()
}
// End Video play

if (document.querySelector('.video-full__desc-show-btn')) {
    document.querySelector('.video-full__desc-show-btn').addEventListener('click', e => {
        document.querySelector('.video-full__desc-show-btn').classList.toggle('video-full__desc-show-btn--opened')
        e.target.closest('.video-full__desc-show-btn').parentElement.classList.toggle('opened')
    })
}

class LanguageSwitcherContoller {
    /**
     * Class contrucor
     * @param {Element} btn Language button element
     * @param {Element} dropdown Language dropdown element
     * @param {string} btnActiveClass Class what added to button when dropdown showed
     * @param {string} dropdownActiveClass Class what added to dropdown when dropdown showed
     */
    constructor(btn, dropdown, btnActiveClass, dropdownActiveClass) {
        this.btn = btn;
        this.dropdown = dropdown;
        this.btnActiveClass = btnActiveClass;
        this.dropdownActiveClass = dropdownActiveClass;
    }

    /**
     * Btn click handler
     */
    btnClickHandler = () => {
        this.btn.addEventListener('click', () => {
            this.showDropdown();
        });
    }

    /**
     * Show dropdown
     */
    showDropdown = () => {
        if (!this.dropdown.classList.contains(this.dropdownActiveClass)) {
            window.addEventListener("click", this.closeOnBackdrop);
        } else {
            window.removeEventListener("click", this.closeOnBackdrop);

        }

        this.btn.classList.toggle(this.btnActiveClass);
        this.dropdown.classList.toggle(this.dropdownActiveClass);
    }

    /**
     * Hide dropdown
     */
    hideDropDown = () => {
        this.btn.classList.remove(this.btnActiveClass);
        this.dropdown.classList.remove(this.dropdownActiveClass);
    }

    closeOnBackdrop = (e) => {
        if (!this.dropdown.contains(e.target) && !this.btn.contains(e.target) && !e.target !== this.dropdown && e.target !== this.btn) {
            this.hideDropDown();
        }
    }
}

// For language switcher !!!!
const lngSwitchers = Array.from(document.querySelectorAll('.lng-swtch'));

const languageSwitcherBtn_activeClass = 'lng-swtch__active--active',
    languageSwitcherDropdown_activeClass = 'swtch-list--active';

lngSwitchers.forEach(switcher => {
    const languageSwitcherBtn = switcher.querySelector('#lngSwtchBtn'),
    languageSwitcherDropdown = switcher.querySelector('#lngSwtchDropdown');
    const lngSwtch = new LanguageSwitcherContoller(languageSwitcherBtn, languageSwitcherDropdown, languageSwitcherBtn_activeClass, languageSwitcherDropdown_activeClass);
    lngSwtch.btnClickHandler();
})

const elMobileNav = document.getElementById('mobileNav');
const clsMobileNavActive = 'active';
const header = document.querySelector('.header');
const clsMobileMenuOpenHeader = 'mobile-menu-open';

class MobileNavController {
    static openMenu = () => {
        elMobileNav.classList.add(clsMobileNavActive);
        header.classList.add(clsMobileMenuOpenHeader);
    }

    static closeMenu = () => {
        elMobileNav.classList.remove(clsMobileNavActive);
        header.classList.remove(clsMobileMenuOpenHeader);
    }
}

class HamburgerController {
    constructor() {
        // Elements
        this.elHamburgerBtn = document.getElementById('hamburger');
        this.hamburgerActive = 'active';
        
        // State
        this.menuIsOpen = false;
        this.headerTypeScroll = false;
        
        // Hanlders
        this.handleHamburgerClick();
    }

    /**
     * Handle click on hamburger button
     */
    handleHamburgerClick = () => {
        this.elHamburgerBtn.addEventListener('click', () => {
            if (!this.menuIsOpen) {
                this.hamburgerMenuActivate();
                
            } else {
                this.hamburgerMenuDisabeling();
                
            }
        })
    }
    
    /**
     * Hamburger menu is active
     */
    hamburgerMenuActivate = () => {
        this.elHamburgerBtn.classList.add(this.hamburgerActive);
        MobileNavController.openMenu();
        this.menuIsOpen = true;
    }
    
    /**
     * Hamburger menu disabeling
     */
    hamburgerMenuDisabeling = () => {
        this.elHamburgerBtn.classList.remove(this.hamburgerActive);
        MobileNavController.closeMenu();
        this.menuIsOpen = false;
    }
}

// Hamburger
const hamburger = new HamburgerController();

// MAIN DOCUMENT CLICK HANDLER
document.addEventListener('click', e => {
    // Hamburger
    (!e.target.closest(`.header__hamburger`) && !e.target.closest('.mobile-nav')) && hamburger.hamburgerMenuDisabeling();

    // FOR MOBILE
    if (window.innerWidth < 960) {
        // Footer lists
        // Footer dropdown
        if (e.target.closest('.list__title')) {
            const title = e.target.closest('.list__title')
            
            title.closest('.list').classList.toggle('active')
        }
    }
});

const showProperVideoCount = (videos) => {
    let max_video_count = 8;
    let min_video_count = 4;
    if (window.matchMedia('(max-width: 639px)').matches) {
        min_video_count = 1;
        max_video_count = 3;
    } else if (window.matchMedia('(max-width: 959px)').matches) {
        min_video_count = 2;
        max_video_count = 4;
    } else if (window.matchMedia('(max-width: 1439px)').matches) {
        min_video_count = 3;
        max_video_count = 6;
    } else if (window.matchMedia('(min-width: 1440px)').matches) {
        min_video_count = 4;
        max_video_count = 8;
    }

    if (videos.length < max_video_count) {
       videos.slice(0, min_video_count).map(v => v.style.display = 'block');
       videos.slice(min_video_count, videos.length).map(v => v.style.display = 'none');
    } else {
        videos.slice(0, max_video_count).map(v => v.style.display = 'block');
        videos.slice(max_video_count, videos.length).map(v => v.style.display = 'none');

    }
}

const bestScenesLists = Array.from(document.querySelectorAll('.best-scenes__list'));

if (bestScenesLists.length > 0) {
    bestScenesLists.forEach(sceneContainer => {
        const videos = Array.from(sceneContainer.querySelectorAll('.video-preview'));
        showProperVideoCount(videos)

        window.addEventListener("resize", () => showProperVideoCount(videos))
    })
}