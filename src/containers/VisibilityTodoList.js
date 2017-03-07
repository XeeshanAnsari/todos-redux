import { connect } from 'react-redux'

import{toggleTodo} from '../actions'
import TodoList from '../components/TodoList'


function getVisibilityTodos(todos, filter){
    switch(filter){
        case 'SHOW_ALL':
          return todos
        case 'SHOW_COMPLETED':
          return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
          return todos.filter(t => !t.completed)  
    }
}

function mapStateToProps(state){//state form store and send to compoenent via props
    return {
        todos: getVisibilityTodos(state.todos , state.visibilityFilter)
    }
}

function mapDispatchToProps(dispatch){//dispatch date to store via  compoenent call back props  
    return{
        onTodoClick: (id) => {dispatch(toggleTodo(id))}// dispatch action
    }
}

const VisibilityTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibilityTodoList