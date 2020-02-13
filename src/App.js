import React, { Component } from 'react'
import Home from "./components/Home.js"
import ReactGA from 'react-ga';

export default class App extends Component {
  render() {

    const trackingId = "UA-156025636-1"; 
    ReactGA.initialize(trackingId);

    return (
      <div>
        <Home/>
      </div>
    )
  }
}
