import HamburgerController from "../classes/HamburgerController"
import LanguageSwitcherContoller from "../classes/LanguagesSwitcherController"

// For language switcher !!!!
const languageSwitcherBtn = document.getElementById('lngSwtchBtn'),
languageSwitcherDropdown = document.getElementById('lngSwtchDropdown')

const languageSwitcherBtn_activeClass = 'lng-swtch__active--active',
languageSwitcherDropdown_activeClass = 'swtch-list--active'

const languageSwitcher_class = 'lng-swtch'
const lngSwtch = new LanguageSwitcherContoller(languageSwitcherBtn, languageSwitcherDropdown, languageSwitcherBtn_activeClass, languageSwitcherDropdown_activeClass)

if (window.innerWidth >= 640) {
    
    // Language switcher button handler (click on button)
    lngSwtch.btnClickHandler()
    // End for language switcher !!!!!
} else {
    // Language switcher in mobile menu
    document.querySelector('.mobile-lng__choose-btn').addEventListener('click', e => {
        document.querySelector('.mobile-lng').classList.toggle('mobile-lng--active')
    })
}

// Hamburger
const hamburger = new HamburgerController()

// MAIN DOCUMENT CLICK HANDLER
document.addEventListener('click', e => {
    if (window.innerWidth >= 640) {
        // lng switcher
        !e.target.closest(`.${languageSwitcher_class}`) && lngSwtch.hideDropDown()
    }

    // Hamburger
    (!e.target.closest(`.header__hamburger`) && !e.target.closest('.mobile-nav')) && hamburger.hamburgerMenuDisabeling()

    // FOR MOBILE
    if (window.innerWidth < 960) {
        // Footer lists
        // Footer dropdown
        if (e.target.closest('.list__title')) {
            const title = e.target.closest('.list__title')
            
            title.parentElement.classList.toggle('list--disabled')
        }
    }
})

// Footer sliders
document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth < 960) {
        const lists = document.querySelectorAll('.footer__list-item')

        Array.from(lists).map(list => {
            list.dataset.maxheight = list.offsetHeight
            list.classList.add('list--disabled')
        })
    }
})