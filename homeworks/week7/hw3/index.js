const list = document.querySelector('.content__lists')
let listItem = document.querySelectorAll('input[type=checkbox]')
list.addEventListener('click', (e) => {
  if (e.target.classList.contains('content__cancel')) {
    list.removeChild(e.target.closest('.content__list'))
  }
})
function inputCheck() {
  listItem = document.querySelectorAll('input[type=checkbox]')
  console.log(listItem)
  for (let i = 0; i < listItem.length; i++) {
    if (listItem[i].checked === true) {
      listItem[i].setAttribute('checked', 'checked')
    } else {
      listItem[i].removeAttribute('checked')
    }
  }
}
function render() {
  const input = document.querySelector('.content__input').value
  inputCheck()
  let str = ''
  str += ` <div class="content__list">
          <li>                
            <label>
              <input type="checkbox"> 
              <span>${input}</span>  
            </label>
          </li>
          <span class="content__cancel">X</span>
        </div> `

  list.innerHTML += str
  document.querySelector('.content__input').value = ''
}
window.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    render()
  }
})
