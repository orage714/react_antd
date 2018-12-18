import React from 'react'
import {Link} from 'react-router-dom'
export default class One extends React.Component{
    render(){
        return (
            <div>
                this  is page ONE 嵌套过来的
               动态路由ID： {this.props.match.params.id}
            </div>
        )
    }
}