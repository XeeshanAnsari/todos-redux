
//reducer have previous state and action
function todo(state = {}, action){
    switch(action.type){
        case 'ADD_TODO':
        return{
            id: action.id,
            text:action.text,
            completed: false   
        }
        case 'TOGGLE_TODO':
        if(state.id !== action.id){ // if previous id and new id same so return previous state
            return state
        }
        return Object.assign({}, state ,{  // object.assign for copy object 
            completed: !state.completed   // if todo click so completed state true 
        })

        default:   // must be use default
        return state
    }
}

function  todos(state =[] , action){  // define empty array in initial state
    switch(action.type){
        case 'ADD_TODO':
           return [
               ...state,    //spreed operator method to select all state
               todos(undefined, action)  // concotination state
           ]


        case 'TOGGLE_TODO':
         return state.map(t => todo(t, action)) 


       default :
          return state  
    }
}


export default todos