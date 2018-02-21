import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './homePage'
import Roster from './resume'

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={homePage}/>
            <Route path='/roster' component={resume}/>
        </Switch>
    </main>
)

export default Main;