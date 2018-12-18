import React  from  'react'
import { HashRouter,Link} from 'react-router-dom'
export default class Rou extends React.Component{
    render(){
        return (
           <HashRouter>
               <div>
                   <ul>
                       <li><Link to="/one" >ONE嵌套</Link></li>
                       <li><Link to="/two" >TW是O</Link></li>
                       <li><Link to="/three" >THREE</Link></li>
                       <li><Link to="/the" >match</Link></li>
                       <li><Link to="/hree" >奥拓车</Link></li>
                   </ul>
                   <hr/>
                  {this.props.children}
               </div>
           </HashRouter>
        )
    }
}