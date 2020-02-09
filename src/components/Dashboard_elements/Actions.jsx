import React from 'react'
import {BrowserRouter as Router, Switch, Route, withRouter} from "react-router-dom";
import Beratungstermin from "./ActionPages/Beratungstermin"
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


export default function Actions(props) {
    console.log(props)
    return (
        <div>
            
        <td><Button id="click" variant="contained" component={Link} to={'/dashboard/${props.user}/beratungsgespräch'}>Beratungstermin</Button></td>

            <Route path="/dashboard/:id/beratungsgespräch" component={Beratungstermin}/>
            <Route/>
            <Route/>
        </div>
    )
}
