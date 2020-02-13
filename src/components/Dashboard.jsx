import React from 'react'
import { Link } from 'react-router-dom';
import NewsSlider from "./Dashboard_elements/NewsSlider"
import Actions from "./Dashboard_elements/Actions"
import TransaktionList from "./Dashboard_elements/TransaktionList"
import Question from "./Dashboard_elements/Question"


export default function Dashboard({match}) {

    const current_user_id = match.params.id


    return (
        <div id="dashboard">
            <div class='ntc'>
                <Link to ={"/login"}>NTC</Link>
            </div>
            <div>
                <h5 class="ntc2">Banking </h5>
            </div>
            <NewsSlider/> 
            <Actions user={current_user_id}/>
            <TransaktionList user={current_user_id}/>
            <Question user={current_user_id}/>
        </div>
    )
}
