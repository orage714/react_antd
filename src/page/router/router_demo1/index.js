import React  from  'react'
import { HashRouter,Route,Link,Switch} from 'react-router-dom'
import One from './one'
import Two from './two'
import Three from './three'
export default class Home extends React.Component{
    render(){
        return (
           <HashRouter>
               <div>
                   <ul>
                       <li><Link to="/" >ONE</Link></li>
                       <li><Link to="/two" >TWO</Link></li>
                       <li><Link to="/three" >THREE</Link></li>
                   </ul>
                   <hr/>
                   <Switch>
                        <Route exact={true} path='/' component={One}></Route>
                        <Route path='/two' component={Two}></Route>
                        <Route path='/three' component={Three}></Route>
                   </Switch>
               </div>
           </HashRouter>
        )
    }
}