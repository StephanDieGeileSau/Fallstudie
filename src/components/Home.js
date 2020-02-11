import React, {Component, useState} from 'react'
import {BrowserRouter as Router, Switch, Route, withRouter} from "react-router-dom";
import Login from "./Login"
import Registration from "./Registration"
import Dashboard from "./Dashboard"
import axios from "axios"
import Beratungstermin from "./Dashboard_elements/ActionPages/Beratungstermin"
import Überweisung from './Dashboard_elements/ActionPages/Überweisung';
import Kredit from "./Dashboard_elements/ActionPages/Kredit"
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

history.listen(location => {
    ReactGA.set({ page: location.pathname }); // Update the user's current page
    ReactGA.pageview(location.pathname); // Record a pageview for the given page
  });

class Home extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            toDashboard : false,
            user : [],
            current : {
                email : "",
                id : ""
            }
        };

        this.userLogin = this.userLogin.bind(this)
    }

    
  
    componentDidMount(){
        axios.get("https://fallstudie-dhbw.firebaseio.com/persons.json").then(
        response =>   {
            const fetchedOrders = [];
            for (let key in response.data){
                fetchedOrders.push({
                    ...response.data[key], 
                    id : key
                })
            this.setState({user: fetchedOrders})
            }
        })
    }

    userLogin(email, id){
        this.state.current.email = email
        this.state.current.id = id
        this.state.toDashboard = true
        console.log(this.state.toDashboard)
    }


    //Karl fragen wie ich componentDidMount wie useEffect mit leerem Event nutzen kann


    render() {

        return (
        <Router history={history}>
            <div>
            <Switch>
                <Route path="/login" render={(props) => <Login {...props} user={this.state.user} userLogin={this.userLogin} />} />
                <Route path="/registration" render={(props) => <Registration {...props} state={this.state} />}/>
                <Route path="/dashboard/:id/beratungsgespräch" component={Beratungstermin}/>
                <Route path="/dashboard/:id/kreditanfrage" component={Kredit}/>                 
                <Route path="/dashboard/:id/überweisung" component={Überweisung}/>                 
                <Route path='/dashboard/:id' component={Dashboard}/>
                <Route path="/" exact component={Login}/>
            </Switch>
            </div>
        </Router>
        )
    }
}

export default Home;