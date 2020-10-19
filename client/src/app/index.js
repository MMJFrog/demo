import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//import { NavBar } from '../components'
//import { MoviesList, MoviesInsert, MoviesUpdate } from '../pages'
import {Test, Test2} from '../pages'
//import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/questions" exact component={Test} />
                <Route path="/test2" exact component={Test2} />
            </Switch>
        </Router>
    )
}

export default App