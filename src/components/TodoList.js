import React ,{Component} from 'react'
import Todo from './Todo'


class TodoList extends Component{
    render(){
        return (
            <ul>
                {this.props.todos.map(todo => //todos props coming from container component 
                    <Todo
                       key ={this.props.todo.id}
                       {...this.props.todo}
                       onClick = {() => this.props.onTodoClick(this.props.todo.id)}
                    />
                )

                }

            </ul>    
        )
    }
}
