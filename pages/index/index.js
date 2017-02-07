//index.js
const {
    addTodo,
    setVisibilityFilter,
    toggleTodo,
    finishAllTodos
} = require('../../actions/index.js')

const pageConfig = {
    data: {
        todos: [],
        filters: [{
            key: 'SHOW_ALL',
            text: '全部'
        }, {
            key: 'SHOW_ACTIVE',
            text: '正在进行'
        }, {
            key: 'SHOW_COMPLETED',
            text: '已完成'
        }]
    },
    reduxPlugin : {
        mapStateToData: ['todos', 'visibilityFilter'],
        mapDispatchToProps: {
            setVisibilityFilter,
            toggleTodo,
            addTodo,
            finishAllTodos
        }
    },
    handleCheck: function(e) {
        const id = parseInt(e.target.id)
        this.props.toggleTodo(id);
    },
    applyFilter: function(e) {
        this.props.setVisibilityFilter(e.target.id)
    },
    handleFinish : function(e){
        this.props.finishAllTodos()
    },
    addTodoHandler : function(e){
        this.props.addTodo(e.detail.value.todo)
    }
}

const filterTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

// Page(nextPageConfig);
getApp().page(pageConfig);
