import React from 'react'
import {BrowserRouter as Router, Switch, Route, withRouter} from "react-router-dom";
import Beratungstermin from "./ActionPages/Beratungstermin"
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import ".././fts_style.css"

export default function Actions(props) {
    return (
        <div>
            <table>
                <tr>
                    <td><Button id="click" variant="contained" component={Link} to={'/dashboard/'+props.user+"/beratungsgespräch"}>Beratungstermin</Button></td>
                    <td><Button id="click" variant="contained" component={Link} to={'/dashboard/'+props.user+"/kreditanfrage"}>Kreditanfrage</Button></td>
                    <td><Button id="click" variant="contained" component={Link} to={'/dashboard/'+props.user+"/überweisung"}>Überweisung</Button></td>
                </tr>
            </table>
        </div>
    )
}
