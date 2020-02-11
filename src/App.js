import React, { Component } from 'react'
import Home from "./components/Home.js"
import ReactGA from 'react-ga';
//import auth from './auth.ts';

export default class App extends Component {
  render() {

    const trackingId = "UA-156025636-1"; 
    ReactGA.initialize(trackingId);
    //ReactGA.set({userId: auth.currentUserId()})

    return (
      <div>
        <Home/>
      </div>
    )
  }
}
