const btn = document.querySelector('.button')
function elBind(dom) {
  return document.querySelector(dom)
}
function checkInput() {
  const name = elBind('input[name=name]').value
  const email = elBind('input[name=email]').value
  const tel = elBind('input[name=tel]').value
  const typeAll = document.querySelectorAll('input[name=type]')
  const howToKnow = elBind('input[name=howToKnow]').value
  const other = elBind('input[name=other]').value
  const checkName = elBind('.checkName')
  const checkEmail = elBind('.checkEmail')
  const checkTel = elBind('.checkTel')
  const checkType = elBind('.checkType')
  const checkKnow = elBind('.checkKnow')
  let checkAllType = false
  let signType
  name === '' ? checkName.classList.add('visible') : checkName.classList.remove('visible')
  email === '' ? checkEmail.classList.add('visible') : checkEmail.classList.remove('visible')
  for (let i = 0; i < typeAll.length; i++) {
    if (typeAll[i].checked) {
      checkType.classList.remove('visible')
      checkAllType = true
      signType = typeAll[i].value
      break
    }
    checkType.classList.add('visible')
  }
  tel === '' ? checkTel.classList.add('visible') : checkTel.classList.remove('visible')
  howToKnow === '' ? checkKnow.classList.add('visible') : checkKnow.classList.remove('visible')
  if (name !== '' && email !== '' && tel !== '' && howToKnow !== '' && checkAllType) {
    return {
      check: true,
      name,
      email,
      tel,
      howToKnow,
      other,
      signType
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
