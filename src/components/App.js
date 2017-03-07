import React , {Component} from 'react'
import {connect } from 'react-redux'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibilityTodoList from '../containers/VisibilityTodoList'

class App extends Component{
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


export default App = connect()(App)

