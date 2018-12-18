import React from 'react'
import {HashRouter,Route,Switch} from 'react-router-dom'
import App from './App'
import Admin from './admin'

import Buttons from "./page/ui/buttons"
import Modals from "./page/ui/modals"
import Loading from "./page/ui/loadings"
import Notice from "./page/ui/notice"
import Message from "./page/ui/messages"
import Gallery from "./page/ui/gallery"
import Tabs from "./page/ui/tabs"
import Carousel from "./page/ui/carousel"

// import NoMatch from './page/nomatch'


export default class Router extends React.Component {
    render(){
        return(
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/login" component={Admin}></Route>
                        <Route path="/" render={()=>
                                <Admin>
                                     <Switch>
                                        <Route path="/ui/buttons" component={Buttons}></Route>
                                        <Route path="/ui/modals" component={Modals}></Route>
                                        <Route path="/ui/loadings" component={Loading}></Route>
                                        <Route path="/ui/notification" component={Notice}></Route>
                                        <Route path="/ui/messages" component={Message}></Route>
                                        <Route path="/ui/tabs" component={Tabs}></Route>
                                        <Route path="/ui/gallery" component={Gallery}></Route>
                                        <Route path="/ui/carousel" component={Carousel}></Route>
                                        {/* <Redirect to="/home"/> */}
                                     </Switch>
                                </Admin>
                            }></Route>
                    </Switch>
                </App>
            </HashRouter>
        )
    }
}