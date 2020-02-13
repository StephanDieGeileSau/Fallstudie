import React from 'react'
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



export default function Überweisung({match}) {
    const current_user_id = match.params.id

    return(
        <React.Fragment>
        <div class="ntc">
                <Link to ={"/dashboard/"+current_user_id}>NTC</Link>
            </div>
            <div>
                <h5 class="ntc2">Banking </h5>
        </div>
        <div>
        <table>
                <tr>
                  <td><TextField label="Empfänger" variant="outlined" /></td>
                  <td><TextField label="IBAN" variant="outlined" /></td>                
                </tr>
                <tr>
                    <td><TextField label="Betreff" variant="outlined" /></td>
                    <td><TextField label="Betrag" variant="outlined" /></td>
                </tr>
                <tr>
                <td colspan="2"><br></br> <Button component={Link} to={"/dashboard/"+current_user_id} variant="contained">Überweisen</Button></td>
                </tr>

        </table>
        </div>
        </React.Fragment>
    )
}
