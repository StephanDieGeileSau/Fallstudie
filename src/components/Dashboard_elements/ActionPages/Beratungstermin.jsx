import React from 'react'
import { Link } from 'react-router-dom';
import { findAllByDisplayValue } from '@testing-library/react'
import Button from '@material-ui/core/Button';


export default function Beratungstermin({match}) {
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
                    <th colspan="2">Vereinbaren Sie hier ihr persönliches Beratungsgespraech<br></br></th>
                </tr>
                <tr>
                    <td colspan="2">
                        <div><textarea id="text" name="text" cols="35" rows="7" onfocus="if(this.value=='Wie können wir Ihnen weiterhelfen?')this.value='';">Wie können wir Ihnen weiterhelfen?</textarea></div>
                    </td>
                </tr>
                <tr>
                    <th colspan="2"><br></br>Wann möchten Sie kontaktiert werden?<br></br></th>
                </tr>
                <tr>
                    <td><select class="fill" name="art" size="1">
                        <option value="1">Montag</option>
                        <option value="2">Dienstag</option>
                        <option value="3">Mittwoch</option>
                        <option value="4">Donnerstag</option>
                        <option value="5">Freitag</option>
                        </select>
                    </td>
                    <td><select class="fill" name="art" size="1">
                        <option value="1">vormittags (8:00-11:00 Uhr)</option>
                        <option value="2">mittags (11:01-14:00 Uhr)</option>
                        <option value="3">nachmittags (14:01-17:00 Uhr)</option>
                        <option value="4">abends (17:01-20:00 Uhr)</option>
                        </select>
                    </td>
                </tr>
                <tr>
                <td colspan="2"><br></br> <Button component={Link} to={"/dashboard/"+current_user_id} variant="contained">Abschicken</Button></td>
                </tr>
            </table>
        </div>
        </React.Fragment>
    )
}
