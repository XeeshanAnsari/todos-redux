import React ,{Component} from 'react'
import FilterLink from '../containers/FilterLink'

export default class Footer extends Component{
    render(){
        return(
            <p>
                show:
                {" "}
                <FilterLink filter="SHOW_ALL">
                   ALL
                </FilterLink>
                {", "}
                 <FilterLink filter="SHOW_ACTIVE">
                   Active
                </FilterLink>
                 {", "}
                 <FilterLink filter="SHOW_COMPLETED">
                   Completed
                </FilterLink>

            </p>    
        )
    }
}