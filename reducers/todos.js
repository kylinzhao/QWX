const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {completed: !state.completed})
    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      state.push(todo(undefined, action))
      return state
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action))
    case 'FINISH_ALL' :
        return state.map( t => Object.assign({}, t, {
            completed : true
        }))
    default:
      return state
  }
}

module.exports = todos
