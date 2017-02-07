let nextTodoId = 0
const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})

const finishAllTodos = () => (dispatch, getState) => {
    setTimeout(() => {
        dispatch({
            type : 'FINISH_ALL'
        })
    },3000)
}

module.exports = {
    addTodo: addTodo,
    setVisibilityFilter: setVisibilityFilter,
    toggleTodo: toggleTodo,
    finishAllTodos : finishAllTodos
}
