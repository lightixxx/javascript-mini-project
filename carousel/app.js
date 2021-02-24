const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')
const carousel = document.querySelectorAll('.carousel')
let i = 0
const nextBtnHandler = () => {
  if (i >= carousel.length - 1) {
    i = 0
    carousel[carousel.length - 1].classList.remove('show')
    carousel[i].classList.add('show')
  } else {
    carousel[i].classList.remove('show')
    carousel[i + 1].classList.add('show')
    i++
  }
}

const prevBtnHandler = () => {
  // i 가 0일때
  if (i === 0) {
    carousel[i].classList.remove('show')
    carousel[carousel.length - 1].classList.add('show')
    i = carousel.length - 1
  } else {
    carousel[i].classList.remove('show')
    carousel[i - 1].classList.add('show')
    i--
    console.log(i);
  }
}

nextBtn.addEventListener('click', nextBtnHandler)

prevBtn.addEventListener('click', prevBtnHandler)

