import { ADD_TODO, DELETE_TODO, DELETE_TODO_ALL, FILTER_TODO, TOGGLE_ISDONE, EDIT_TODO, EDIT_INPUT } from '../actionTypes'

let todoId = 0

const initialState = {
  todos: [],
  filter: 'all'
}

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      if (action.payload.content.trim() === '') {
        alert('Please input value')
        return {
          ...state,
          todos: state.todos
        }
      }
      return {
        ...state,
        todos: [...state.todos, {
          id: todoId++,
          content: action.payload.content,
          isDone: action.payload.isDone,
          editValue: action.payload.content,
          isEdit: false
        }]
      }
    }
    case DELETE_TODO: {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id)
      }
    }
    case DELETE_TODO_ALL: {
      return {
        todos: []
      }
    }
    case TOGGLE_ISDONE: {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== action.payload.id) return todo
          return {
            ...todo,
            isDone: !todo.isDone
          }
        })
      }
    }
    case FILTER_TODO: {
      return {
        ...state,
        todos: state.todos,
        filter: action.payload.filter
      }
    }
    case EDIT_TODO: {
      if (action.payload.e.target.nodeName === 'DIV') {
        return {
          ...state,
          todos: state.todos.map((todo) => {
            if (todo.id !== action.payload.id) return todo
            return {
              ...todo,
              isEdit: !todo.isEdit
            }
          })
        }
      }
      if (action.payload.e.target.nodeName === 'BUTTON' && action.payload.e.target.innerText === 'done') {
        return {
          ...state,
          todos: state.todos.map((todo) => {
            if (todo.id !== action.payload.id) return todo
            return {
              ...todo,
              content: todo.editValue,
              isEdit: !todo.isEdit
            }
          })
        }
      }
      if (action.payload.e.target.nodeName === 'BUTTON' && action.payload.e.target.innerText === 'cancel') {
        return {
          ...state,
          todos: state.todos.map((todo) => {
            if (todo.id !== action.payload.id) return todo
            return {
              ...todo,
              editValue: todo.content,
              isEdit: !todo.isEdit
            }
          })
        }
      }
      break
    }
    case EDIT_INPUT: {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== action.payload.id) return todo
          return {
            ...todo,
            editValue: action.payload.e.target.value
          }
        })
      }
    }
    default: {
      return state
    }
  }
}
