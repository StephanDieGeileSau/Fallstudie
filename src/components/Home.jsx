import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./Login"
import Registration from "./Registration"
import Dashboard from "./Dashboard"

export default function Home() {


    
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/registration" component={Registration}/>
                    <Route path="/dashboard/:id" component={Dashboard}/>                 
                    <Route path="/" exact component={Login}/>
                </Switch>
            </div>
        </Router>
    ) 
}
