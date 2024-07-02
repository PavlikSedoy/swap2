export default class LanguageSwitcherContoller {
    /**
     * Class contrucor
     * @param {Element} btn Language button element
     * @param {Element} dropdown Language dropdown element
     * @param {string} btnActiveClass Class what added to button when dropdown showed
     * @param {string} dropdownActiveClass Class what added to dropdown when dropdown showed
     */
    constructor(btn, dropdown, btnActiveClass, dropdownActiveClass) {
        this.btn = btn
        this.dropdown = dropdown
        this.btnActiveClass = btnActiveClass
        this.dropdownActiveClass = dropdownActiveClass
    }

    /**
     * Btn click handler
     */
    btnClickHandler = () => {
        this.btn.addEventListener('click', () => {
            this.showDropdown()
        })
    }

    /**
     * Show dropdown
     */
    showDropdown = () => {
        this.btn.classList.toggle(this.btnActiveClass)
        this.dropdown.classList.toggle(this.dropdownActiveClass)
    }

    /**
     * Hide dropdown
     */
    hideDropDown = () => {
        this.btn.classList.remove(this.btnActiveClass)
        this.dropdown.classList.remove(this.dropdownActiveClass)
    }
}