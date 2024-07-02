import HeaderController from "./HeaderController"
import MobileNavController from './MobileNavController'

export default class HamburgerController {
    constructor() {
        
        // Elements
        this.elHamburgerBtn = document.getElementById('hamburger')
        
        this.hamburgerActive = 'header__hamburger--active'
        
        // State
        this.menuIsOpen = false
        this.headerTypeScroll = false
        
        // Hanlders
        this.handleHamburgerClick()
    }

    /**
     * Handle click on hamburger button
     */
    handleHamburgerClick = () => {
        this.elHamburgerBtn.addEventListener('click', () => {
            if (!this.menuIsOpen) {
                this.hamburgerMenuActivate()
                
            } else {
                this.hamburgerMenuDisabeling()
                
            }
        })
    }
    
    /**
     * Hamburger menu is active
     */
    hamburgerMenuActivate = () => {
        this.elHamburgerBtn.classList.add(this.hamburgerActive)
        MobileNavController.openMenu()
        this.menuIsOpen = true
    }
    
    /**
     * Hamburger menu disabeling
     */
    hamburgerMenuDisabeling = () => {
        this.elHamburgerBtn.classList.remove(this.hamburgerActive)
        MobileNavController.closeMenu()
        this.menuIsOpen = false
    }
}