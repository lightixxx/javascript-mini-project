const userProfile = document.querySelector('.user-profile')
const messageUser = document.querySelector('.message-user')

messageUser.addEventListener('click', () => {
  userProfile.classList.toggle('show')
})

