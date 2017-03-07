import {createStore} from 'redux'
import todoApp from '../reducers/root_reducer'


let store = createStore(todoApp)


export default store;