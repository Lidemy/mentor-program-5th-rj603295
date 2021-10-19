import { useState, React } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './redux/actions'

export default function AddTodo() {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  return (
    <div className="content__input-border">
    <input type="text" placeholder="type something here..." onKeyDown={(e) => {
      if (e.key === 'Enter') {
        dispatch(addTodo(value))
        setValue('')
      }
    }} value={value} onChange={(e) => setValue(e.target.value)} className="content__input" />
    </div>
  )
}
