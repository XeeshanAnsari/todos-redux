import React , {Component} from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibilityTodoList from '../containers/VisibilityTodoList'


export default class App extends Component{
     render(){
         return(
             <div>
               <AddTodo   />
               <VisibilityTodoList />
               <Footer />
             </div>    
         )
     }
}