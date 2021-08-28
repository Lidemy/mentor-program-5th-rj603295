import './style.css'
import React, { useState } from 'react'

function App() {
  const input = React.useRef()
  const [value, setValue] = useState({
    name: '',
    email: '',
    tel: '',
    type: '',
    howToKnow: '',
    other: ''
  })
  const [validation, setValidation] = useState({
    name: true,
    email: true,
    tel: true,
    type: true,
    howToKnow: true
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validation.name && !validation.email && !validation.tel && !validation.type && !validation.howToKnow) {
      alert(`暱稱: ${value.name}\n電子郵件: ${value.email}\n手機號碼: ${value.tel}\n報名類型: ${value.type}\n怎麼知道這個活動的: ${value.howToKnow}\n其他: ${value.other}`)
    }
  }
  const handleInputChange = (e) => {
    e.preventDefault()
    const propertyName = e.target.name
    setValue({
      name: value.name,
      email: value.email,
      tel: value.tel,
      type: value.type,
      howToKnow: value.howToKnow,
      other: value.other,
      [propertyName]: e.target.value
    })
    setValue((prevState) => {
      handleInputValidation(propertyName, prevState)
      return prevState
    })
  }

  const handleInputValidation = (propertyName, prevState) => {
    if (prevState[propertyName] === '') {
      setValidation({
        name: validation.name,
        email: validation.email,
        tel: validation.tel,
        type: validation.type,
        howToKnow: validation.howToKnow,
        [propertyName]: true
      }
      )
    } else if (prevState[propertyName] !== '') {
      setValidation({
        name: validation.name,
        email: validation.email,
        tel: validation.tel,
        type: validation.type,
        howToKnow: validation.howToKnow,
        [propertyName]: false
      }
      )
    }
  }
  return (
    <div className="App">
      <section className="content">
    <div className="wrapper">
      <div className="content__list">
        <h1>新拖延運動報名表單</h1>
        <p>活動日期：2020/12/10 ~ 2020/12/11</p>
        <p>活動地點：台北市大安區新生南路二段1號</p>
        <br />
        <p className="red">*必填</p>
        <br />
        <br />
        <br />
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="name" className="important">暱稱</label><br />
          <input type="text" name="name" placeholder="您的回答" value={value.name} onChange={handleInputChange} /><br />
          <p className={validation.name ? 'check checkName visible red' : 'check checkName hidden'}>暱稱不可為空</p>
          <label htmlFor="email" className="important">電子郵件</label><br />
          <input type="email" name="email" placeholder="您的電子郵件" value={value.email} onChange={handleInputChange} /><br />
          <p className={validation.email ? 'check checkEmail visible red' : 'check checkEmail hidden'}>電子郵件不可為空</p>
          <label htmlFor="tel" className="important">手機號碼</label><br />
          <input type="tel" name="tel" placeholder="您的手機號碼" value={value.tel} onChange={handleInputChange} /><br />
          <p className={validation.tel ? 'check checkTel visible red' : 'check checkTel hidden'}>手機號碼不可為空</p>
          <label htmlFor="type" className="important">報名類型</label><br />
          <input type="radio" name="type" className="input-radio" onChange={handleInputChange} value="躺在床上用想像力實作" checked={value.type === '躺在床上用想像力實作'} /> 躺在床上用想像力實作<br />
          <input type="radio" name="type" onChange={handleInputChange} value="趴在地上滑手機找現成的" checked={value.type === '趴在地上滑手機找現成的'} /> 趴在地上滑手機找現成的<br />
          <p className={validation.type ? 'check checkType visible red' : 'check checkType hidden'}>報名類型不可為空</p>
          <label htmlFor="howToKnow" className="important">怎麼知道這個活動的？</label><br />
          <input type="text" name="howToKnow" placeholder="您的回答" value={value.howToKnow} onChange={handleInputChange} /><br />
          <p className={validation.howToKnow ? 'check checkKnow visible red' : 'check checkKnow hidden'}>怎麼知道這個活動的不可為空</p>
          <label htmlFor="other">其他</label>
          <p>對活動的一些建議</p><br />
          <input type="text" name="other" placeholder="您的回答" value={value.other} onChange={handleInputChange}/><br />
          <input type="submit" className="button" placeholder="您的回答" /><br />
        </form>
        <p>請勿透過表單送出您的密碼。</p>
      </div>
    </div>
  </section>
  <footer>
    <p>© 2020 © Copyright. All rights Reserved.</p>
  </footer>
    </div>
  )
}

export default App
