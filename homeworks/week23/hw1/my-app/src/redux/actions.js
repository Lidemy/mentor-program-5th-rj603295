import { ADD_TODO, DELETE_TODO, DELETE_TODO_ALL, TOGGLE_ISDONE, FILTER_TODO, EDIT_TODO, EDIT_INPUT } from './actionTypes'

export function addTodo(content, isDone = false) {
  return {
    type: ADD_TODO,
    payload: {
      content,
      isDone
    }
  }
}
export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    payload: {
      id
    }
  }
}
export function deleteAllTodo() {
  return {
    type: DELETE_TODO_ALL
  }
}
export function toggleIsDone(id) {
  return {
    type: TOGGLE_ISDONE,
    payload: {
      id
    }
  }
}
export function filterTodo(filter) {
  return {
    type: FILTER_TODO,
    payload: {
      filter
    }
  }
}
export function editTodo(e, id) {
  return {
    type: EDIT_TODO,
    payload: {
      e,
      id
    }
  }
}
export function editInput(e, id) {
  return {
    type: EDIT_INPUT,
    payload: {
      e,
      id
    }
  }
}
