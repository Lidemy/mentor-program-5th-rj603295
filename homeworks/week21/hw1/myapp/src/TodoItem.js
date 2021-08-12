import './App.css';
import './style.css';

export default function TodoItem ({todo, handleDeleteTodo, handleToggleIsDone}) {
  return (
    <div className="content__list" data-todo-id={todo.id}>
    <li>                
      <label>
        <input className="list-item active" type="checkbox" defaultChecked={todo.isDone ? true : false} onClick={() => handleToggleIsDone(todo.id)}/> 
        <span className="content__text">{todo.content}</span>  
      </label>
    </li>
    <span className="content__cancel" onClick={()=> {
      handleDeleteTodo(todo.id)
    }}>X</span>
  </div> 
  )
}