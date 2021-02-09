const dropdownToggleBtn = document.querySelector('.dropdown-toggle')
const dropdownMenu = document.querySelector('.dropdown-menu')
const submitBtn = document.querySelector('.next-button')
const options = document.querySelectorAll('.dropdown-option')

dropdownToggleBtn.addEventListener('click', () => {
  dropdownMenu.classList.toggle('show')
})

dropdownToggleBtn.addEventListener('blur', () => {
  dropdownMenu.classList.remove('show')
})

options.forEach(item => {
  item.addEventListener('click', selectOption)
})

function selectOption() {
  const buttonLabel = this.textContent.trim()
  dropdownToggleBtn.innerHTML = buttonLabel
  dropdownToggleBtn.classList.add('selected')
  submitBtn.removeAttribute('disabled')
}
