import React  from  'react'
import { HashRouter,Link} from 'react-router-dom'
export default class Rou extends React.Component{
    render(){
        return (
           <HashRouter>
               <div>
                   <ul>
                       <li><Link to="/" >OsdssddsNE</Link></li>
                       <li><Link to="/two" >TW是O</Link></li>
                       <li><Link to="/three" >THREE</Link></li>
                   </ul>
                   <hr/>
                  {this.props.children}
               </div>
           </HashRouter>
        )
    }
}