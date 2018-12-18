import React  from  'react'
import { HashRouter,Route,Switch} from 'react-router-dom'
import Rou from './index.1'
import One from './one'
import Two from './two'
import Three from './three'
import Main from './main'
import NoMatch from "./NoMatch"
export default class Home extends React.Component{
    render(){
        return (
            <HashRouter>
                <Rou>
                    <Switch>
                        <Route path='/one' render={()=>
                            <Main>
                                <Route path='/one/:id' component={One}></Route>
                            </Main>
                        }></Route>
                        <Route path='/two' component={Two}></Route>
                        <Route path='/three' component={Three}></Route>
                        <Route component={NoMatch}></Route>
                    </Switch>
                </Rou>
            </HashRouter>
        )
    }
}