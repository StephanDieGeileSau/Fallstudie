import React, { Component, Fragment } from 'react'
import QuestionCard from "./QuestionCard"
import axios from "axios"

const Today = new Date
const splt = Today.getDay()

export default class Question extends Component {

  constructor(props) {
    super(props);
    this.state = {
        questions: [],
        }
}

  getDatabaseUpdate(){
    axios.get("https://fallstudie-dhbw.firebaseio.com/questions.json").then(
    response =>   {
        const fetchedOrders = [];
        for (let key in response.data){
            fetchedOrders.push({
                ...response.data[key], 
                id : key
            })
        this.setState({questions: fetchedOrders})
        }
    })
    this.forceUpdate()
  }

  componentDidMount(){
    this.getDatabaseUpdate()
  }

  render() {

    return (
      this.state.questions.map(question => {
        if (question.id === splt.toString() && this.state.day_answer !== true) {
          return (
          <div>
          <QuestionCard question={question}/>
          </div>
          )
        }
      })
    )
  }
}