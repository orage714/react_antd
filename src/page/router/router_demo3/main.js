import React from 'react'
import {Link} from 'react-router-dom'
export default class Main extends React.Component{
    render(){
        return (
            <div>
                this  is page ONE
                     <Link to="/one/:test-id">我是嵌套的route1</Link>
                     <Link to="/one/:345">我是嵌套的route2</Link>
                     {this.props.children}
            </div>
        )
    }
}