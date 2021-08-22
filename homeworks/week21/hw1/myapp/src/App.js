import './App.css';
import './style.css';
import TodoItem from './TodoItem.js'
import { useState } from 'react';

let id = 3
function App() {
  const [todos, setTodos] = useState([
    {id:1, content:'abc', isDone: true, isEdit: false, editValue: 'abc'},
    {id:2, content:'bbc', isDone: false, isEdit: false, editValue: "bbc"}
  ])
  const [value, setValue] = useState('')
  const [filter, setFilter] = useState('all')
  const handleButtonClick = (e) => {
    if (e.key === 'Enter') {
      setTodos([{
        id,
        content: value,
        editValue: value
      }, ...todos])
      setValue('')
      id++
    }
  }
  const handleInputChange = (e) => {
    setValue(e.target.value)
  }
  const handleDeleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  const handleDeleteTodoAll = id => {
    setTodos([])
  }
  const handleToggleIsDone = id => {
    setTodos(todos.map(todo => {
      if (todo.id !== id) return todo
      return {
        ...todo,
        isDone: !todo.isDone
      }
    }))
  }
  const handleFilterDone = status => {
    setFilter(status)
  }
  const handleEditTodo = (e, id) => {
    if (e.target.nodeName === "DIV"){
      setTodos(todos.map(todo => {
        if (todo.id !== id) return todo
        return {
          ...todo,
          isEdit: !todo.isEdit
        }
      }))
    }
    if (e.target.nodeName === "BUTTON" && e.target.innerText === "done"){
      setTodos(todos.map(todo => {
        if (todo.id !== id) return todo
        return {
          ...todo,
          content: todo.editValue,
          isEdit: !todo.isEdit,
        }
      }))
    }
    if (e.target.nodeName === "BUTTON" && e.target.innerText === "cancel"){
      setTodos(todos.map(todo => {
        if (todo.id !== id) return todo
        return {
          ...todo,
          editValue: todo.content,
          isEdit: !todo.isEdit,
        }
      }))
    }
  }
  const handleEditInputChange = (e, id) => {
    setTodos(todos.map(todo => {
        if (todo.id !== id) return todo
        return {
          ...todo,
          editValue: e.target.value,
        }
      }))
  }
  return (
    <div className="App">
      <div className="content">
    <h1>Todo List</h1>
    <div className="wrapper">
      <div className="content__input-border">
        <input type="text" placeholder="type something here..." value={value} onChange={handleInputChange} onKeyDown={handleButtonClick} className="content__input" />
      </div>
      <div className="content__lists mb-5">
        {
          todos
          .filter(todo => filter === 'completed' ? todo.isDone : filter === 'active' ? !todo.isDone : true)
          .map(todo => <TodoItem key={todo.id} todo={todo} handleEditInputChange={handleEditInputChange} handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} handleToggleIsDone={handleToggleIsDone} />)
        }   
      </div>
      <div className="content__status" role="group" aria-label="Basic radio toggle button group">
        <button onClick={() => {handleFilterDone('all')}}>all</button>
        <button onClick={() => {handleFilterDone('active')}}>active</button>
        <button onClick={() => {handleFilterDone('completed')}}>completed</button>
      </div>
      <button type="button" className="btn btn-outline-secondary btn-clear-all" onClick={handleDeleteTodoAll}>Clear All</button>
    </div>
  </div>
    </div>
  );
}

export default App;
