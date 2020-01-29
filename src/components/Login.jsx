import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';



export default function Login() {
    return (
        <div>
            <form noValidate autoComplete="off">
                <TextField label="E-Mail" variant="outlined" />
                <TextField label="Passwort" variant="outlined" />
                <Button variant="contained">Login</Button>
                <Button variant="contained" component={Link} to={'/registration'}>Registrieren</Button>
            </form>
        </div>
    )
}
