import { useDispatch, React } from 'react-redux'
import { deleteTodo, toggleIsDone, editTodo, editInput } from './redux/actions'

export default function TodoItem({ todo }) {
  const dispatch = useDispatch()
  return (
    <div className="content__list" data-todo-id={todo.id} onDoubleClick={(e) => {
      if (e.target.nodeName === 'DIV') {
        dispatch(editTodo(e, todo.id))
      }
    }}>
       <div className="content__edit-input" style={{ display: todo.isEdit ? 'flex' : 'none' }}>
        <input type="text" value={todo.editValue} onChange={(e) => dispatch(editInput(e, todo.id))} />
        <button onClick={(e) => dispatch(editTodo(e, todo.id))}>done</button>
        <button onClick={(e) => dispatch(editTodo(e, todo.id))}>cancel</button>
      </div>
    <li style={{ display: !todo.isEdit ? 'block' : 'none' }}>
      <label>
        <input className="list-item active" type="checkbox" onClick={() => dispatch(toggleIsDone(todo.id))} defaultChecked={todo.isDone}/>
        <span className="content__text">{todo.content}</span>
      </label>
    </li>
    <span style={{ display: !todo.isEdit ? 'block' : 'none' }} className="content__cancel" onClick={() => {
      dispatch(deleteTodo(todo.id))
    }}>X</span>
  </div>
  )
}
