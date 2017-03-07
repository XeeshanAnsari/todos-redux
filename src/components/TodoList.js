import React ,{Component} from 'react'
import Todo from './Todo'


class TodoList extends Component{
    render(){
        return (
            <ul>
                { console.log(this.props.todos )}
                {this.props.todos.map(todo => //todos props coming from container component 
                   
                    <Todo
                       key ={todo.id}
                       {...todo}
                       onClick = {() => this.props.onTodoClick(todo.id)}
                       
                    />
                    
                )

                }

            </ul>    
        )
    }
}

export default TodoList