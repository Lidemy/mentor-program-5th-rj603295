const btn = document.querySelector('.button')
function bindDom(dom) {
  return document.querySelector(dom)
}
function checkInput() {
  const name = bindDom('input[name=name]').value
  const email = bindDom('input[name=email]').value
  const tel = bindDom('input[name=tel]').value
  const typeAll = document.querySelectorAll('input[name=type]')
  const howToKnow = bindDom('input[name=howToKnow]').value
  const other = bindDom('input[name=other]').value
  const checkName = bindDom('.checkName')
  const checkEmail = bindDom('.checkEmail')
  const checkTel = bindDom('.checkTel')
  const checkType = bindDom('.checkType')
  const checkKnow = bindDom('.checkKnow')
  let checkAllType = false
  let type
  name === '' ? checkName.style.visibility = 'visible' : checkName.style.visibility = 'hidden'
  email === '' ? checkEmail.style.visibility = 'visible' : checkEmail.style.visibility = 'hidden'
  for (let i = 0; i < typeAll.length; i++) {
    if (typeAll[i].checked) {
      checkType.style.visibility = 'hidden'
      checkAllType = true
      type = typeAll[i].value
      break
    }
    checkType.style.visibility = 'visible'
  }
  tel === '' ? checkTel.style.visibility = 'visible' : checkTel.style.visibility = 'hidden'
  howToKnow === '' ? checkKnow.style.visibility = 'visible' : checkKnow.style.visibility = 'hidden'
  if (name !== '' && email !== '' && tel !== '' && howToKnow !== '' && checkAllType) {
    return {
      check: true,
      name,
      email,
      tel,
      howToKnow,
      other,
      type
    }
  } else {
    return { check: false }
  }
}
btn.addEventListener('click', (e) => {
  e.preventDefault()
  const result = checkInput()
  if (result.check) {
    alert(`暱稱: ${result.name}\n電子郵件: ${result.email}\n手機號碼: ${result.tel}\n報名類型: ${result.type}\n怎麼知道這個活動的: ${result.howToKnow}\n其他: ${result.other}`)
  }
})
