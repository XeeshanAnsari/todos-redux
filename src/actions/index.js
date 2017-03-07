 
import actionType from '../constant/action-type' 


let nextTodoId =0

export function addTodo(text){
    return{
        type: 'ADD_TODO',
        id: nextTodoId++,
        text

    }
}

export function setVisibiltyFilter(filter){
    return{
        type: 'SET_VISIBILTY_FILTER',
        filter
    }
} 

export function tiggleTodo(id){
    return{
        type:'TOGGLE_TODO',
        id
    }
}