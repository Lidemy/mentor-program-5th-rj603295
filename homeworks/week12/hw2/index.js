// const $ = 'jQuery'

const list = document.querySelector('.content__lists')
let listItem = document.querySelectorAll('input[type=checkbox]')
list.addEventListener('click', (e) => {
  if (e.target.classList.contains('content__cancel')) {
    list.removeChild(e.target.closest('.content__list'))
  }
})
function inputCheck(e) {
  listItem = document.querySelectorAll('input[type=checkbox]')
  for (let i = 0; i < listItem.length; i++) {
    if (listItem[i].checked === true) {
      listItem[i].setAttribute('checked', 'checked')
      listItem[i].classList.add('completed')
      listItem[i].classList.remove('active')
    } else {
      listItem[i].removeAttribute('checked')
      listItem[i].classList.remove('completed')
      listItem[i].classList.add('active')
    }
  }
}
function render(e) {
  const input = document.querySelector('.content__input').value
  let str = ''
  str += ` <div class="content__list">
          <li>                
            <label>
              <input type="checkbox" oninput="inputCheck()"> 
              <span class="content__text">${input}</span>  
            </label>
          </li>
          <span class="content__cancel">X</span>
        </div> `

  list.innerHTML += str
  inputCheck(e)
  document.querySelector('.content__input').value = ''
}
window.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    render(e)
  }
})
