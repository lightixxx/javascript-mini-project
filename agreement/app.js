const checkAllBtn = document.querySelector('#checkAll')
const termsOfServiceBtn = document.querySelector('#termsOfService')
const privacyPolicyBtn = document.querySelector('#privacyPolicy')
const allowPromotionsBtn = document.querySelector('#allowPromotions')
const submitBtn = document.querySelector('.next-button')
const requiredBtn = document.querySelectorAll('.required')
const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
  e.preventDefault();
})

form.addEventListener('click', () => {
  if(termsOfServiceBtn.checked && privacyPolicyBtn.checked && allowPromotionsBtn.checked) {
    checkAllBtn.checked = true;
  } else {
    checkAllBtn.checked = false;
  }
})

checkAllBtn.addEventListener('click', () => {
  if(!termsOfServiceBtn.checked || !privacyPolicyBtn.checked || !allowPromotionsBtn.checked) {
    termsOfServiceBtn.checked = true
    privacyPolicyBtn.checked = true
    allowPromotionsBtn.checked = true
    submitBtn.disabled = false
  } else {
    termsOfServiceBtn.checked = false
    privacyPolicyBtn.checked = false
    allowPromotionsBtn.checked = false
    submitBtn.disabled = true
  }
})

termsOfServiceBtn.addEventListener('click', () => {
  if(termsOfServiceBtn.checked && privacyPolicyBtn.checked) {
    submitBtn.disabled = false
  } else {
    submitBtn.disabled = true
  }
})

privacyPolicyBtn.addEventListener('click', () => {
  if(termsOfServiceBtn.checked && privacyPolicyBtn.checked) {
    submitBtn.disabled = false
  } else {
    submitBtn.disabled = true
  }
})

