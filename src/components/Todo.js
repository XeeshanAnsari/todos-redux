

import React , {PropTypes, Component} from 'react';


export default class Todo extends Component{
    render(){
        return (
            <li onClick={this.props.onClick} // parent component TodosList send some data
             style={{ textDecoration : this.props.complete ? 'li-through' : 'none'}}  >
               
                {this.props.text}  

            </li>
        )

    }
}