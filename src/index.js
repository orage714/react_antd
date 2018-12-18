import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import Router from './router'
import registerServiceWorker from './registerServiceWorker';
ReactDom.render(<Router/>,document.getElementById('root'));
registerServiceWorker();