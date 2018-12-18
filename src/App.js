import React from 'react'
import { Divider } from 'antd';
export default class App extends React.Component{
    render(){
        return(
            <div>
                {this.props.children}
            </div>
        )
    }
}