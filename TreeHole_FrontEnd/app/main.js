import React from 'react'
import ReactDOM from 'react-dom'
// import $ from 'jquery'
import bulma from 'bulma/css/bulma.css'
import { Router, Route, useRouterHistory, IndexRedirect, Link } from 'react-router';
import { createHashHistory } from 'history';
import Index from './modules/indexapp'
import About from './modules/about'
import NavHead from './modules/navhead'
import FooterApp from './modules/footer'

ReactDOM.render((<NavHead />),document.getElementById('headerapp'));

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

ReactDOM.render((
  <Router history={appHistory}>
    <Route path="/" component={Index}>
      <IndexRedirect to="/index" />
    </Route>
    <Route path="/index" component={Index}/>

    <Route path="/about" component={About}/>
  </Router>
), document.getElementById('app'))

ReactDOM.render((<FooterApp />),document.getElementById('footerapp'));


console.log("留言：喜欢就支持一下嘛~ovo")
