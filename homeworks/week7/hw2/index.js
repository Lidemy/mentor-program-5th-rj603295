const question = document.querySelectorAll('.section__question')
const answer = document.querySelectorAll('.section__answer')
for (let i = 0; i < question.length; i++) {
  question[i].addEventListener('click', () => {
    window.getComputedStyle(answer[i], null).getPropertyValue('display') === 'none' ? answer[i].style.display = 'block' : answer[i].style.display = 'none'
  })
}
