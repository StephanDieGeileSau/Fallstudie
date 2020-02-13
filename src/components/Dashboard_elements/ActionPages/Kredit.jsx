import React from 'react'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';


export default function Kredit({match}) {
    const current_user_id = match.params.id

    return(
        <React.Fragment>
        <div class="ntc">
                <Link to ={"/dashboard/"+current_user_id}>NTC</Link>
            </div>
            <div>
                <h5 class="ntc2">Banking </h5>
        </div>
        <table>
            <p>Dieser Dienst wird zur Zeit nicht unterstützt.</p>
            <p>Bitte melden Sie sich telefonisch bei uns!</p>
        </table>
        
        </React.Fragment>
    )
}
