const reserveInputsWrapper = document.querySelector('.reserve-now__inputs-wrapper')

reserveInputsWrapper.addEventListener('click', e => {
    if (e.target.className == 'reserve-input__customize') {
        const inputWrapper = e.target.parentElement
        inputWrapper.children[0].showPicker()
    }
})

const datesInputs = document.querySelectorAll('.reserve-input__field')

Array.from(datesInputs).map(input => {
    input.addEventListener('change', () => {
        input.parentElement.children[1].classList.add('reserve-input__customize--disabled')
    })
})