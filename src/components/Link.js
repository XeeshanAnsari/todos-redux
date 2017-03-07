import React , {Component} from 'react'


export default class Link extends Component{
    render(){
        if(this.props.active){
            return <span>{this.props.childern}</span>
        }
        return(
            <a
              onClick={e => {
                  e.preventDefault();
                  this.props.onClick()
              }}
              >
              {this.props.childern}
              </a>
              
            
        )
    }
}