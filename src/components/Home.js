import React, {Component, useState} from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./Login"
import Registration from "./Registration"
import Dashboard from "./Dashboard"
import axios from "axios"


export default class Home extends Component {
    
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
        <Router>
            <div>
            <Switch>
                <Route path="/login" render={(props) => <Login {...props} user={this.state.user} userLogin={this.userLogin} />} />
                <Route path="/registration" render={(props) => <Registration {...props} state={this.state} />}/>
                <Route path='/dashboard/:id' component={Dashboard}/>                 
                <Route path="/" exact component={Login}/>
            </Switch>
            </div>
        </Router>
        )
    }
}
