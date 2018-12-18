import React  from  'react'
import { Route} from 'react-router-dom'
import Rou from './index.1'
import One from './one'
import Two from './two'
import Three from './three'
export default class Home extends React.Component{
    render(){
        return (
            <div>
                <Rou>
                    <Route exact={true} path='/' component={One}></Route>
                    <Route path='/two' component={Two}></Route>
                    <Route path='/three' component={Three}></Route>
                </Rou>
            </div>
        )
    }
}