import React from 'react'
import './style.css'
import { useSelector, useDispatch } from 'react-redux'
import AddTodo from './AddTodo'
import TodoItem from './TodoItem'
import { selectTodos, selectFilter } from './redux/selectors'
import { deleteAllTodo, filterTodo } from './redux/actions'

function App() {
  const todos = useSelector(selectTodos)
  const filter = useSelector(selectFilter)
  const dispatch = useDispatch()
  return (
    <div>
      <div className="content">
      <h1>Todo List</h1>
      <div className="wrapper">
          <AddTodo />
      <div className="content__lists mb-5">
        {
          todos
            .filter((todo) => (filter === 'completed' ? todo.isDone : filter === 'active' ? !todo.isDone : true))
            .map((todo) => <TodoItem key={todo.id} todo={todo}/>)
        }
      </div>
    <button onClick={() => dispatch(filterTodo('all'))}>All</button>
    <button onClick={() => dispatch(filterTodo('active'))}>Active</button>
    <button onClick={() => dispatch(filterTodo('completed'))}>Completed</button>
    <button onClick={() => dispatch(deleteAllTodo())}>Clear All</button>
          </div>
      </div>
    </div>
  )
}

export default App
