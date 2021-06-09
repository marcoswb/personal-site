import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Experience from './pages/Experience'
import Formation from './pages/Formation'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import Contacts from './pages/Contacts'


export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/experience" component={Experience}/>
                <Route path="/formation" component={Formation}/>
                <Route path="/projects" component={Projects}/>
                <Route path="/blog" component={Blog}/>
                <Route path="/contacts" component={Contacts}/>
            </Switch>
        </BrowserRouter>
    )
}