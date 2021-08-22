import './App.css';
import './style.css';

export default function TodoItem ({todo, handleDeleteTodo, handleToggleIsDone, handleEditTodo, handleEditInputChange}) {
  return (
    <div className="content__list" data-todo-id={todo.id} onDoubleClick={(e) => {handleEditTodo(e, todo.id)}}>
      <div className="content__edit-input" style={{display: todo.isEdit ? 'flex' : 'none'}}>
        <input type="text" value={todo.editValue} onChange={(e) => handleEditInputChange(e, todo.id)} />
        <button onClick={(e) => {handleEditTodo(e, todo.id)}}>done</button>
        <button onClick={(e) => {handleEditTodo(e, todo.id)}}>cancel</button>
      </div>

    <li style={{display: !todo.isEdit ? 'block' : 'none'}}>                
      <label>
        <input className="list-item active" type="checkbox" defaultChecked={todo.isDone ? true : false} onClick={() => handleToggleIsDone(todo.id)}/> 
        <span className="content__text">{todo.content}</span>  
      </label>
    </li>
    <span style={{display: !todo.isEdit ? 'block' : 'none'}} className="content__cancel" onClick={()=> {
      handleDeleteTodo(todo.id)
    }}>X</span>
  </div> 
  )
}