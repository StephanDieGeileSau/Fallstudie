import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export default function Registration() {
    return (
        <div>
            <Link to="/login">NTC Banking</Link>
            <form noValidate autoComplete="off">
                <TextField label="E-Mail" variant="outlined" />
                <TextField label="Passwort" variant="outlined" />
                <TextField label="Passwort wiederholen" variant="outlined" />
                <TextField label="Name" variant="outlined" />
                <TextField label="Nachname" variant="outlined" />
                <TextField label="Adresse" variant="outlined" />
                <TextField label="Postleitzahl" variant="outlined" />
                <TextField label="Stadt" variant="outlined" />
                <TextField label="Telefonnummer" variant="outlined" />
                <Button variant="contained">Registrieren</Button>
            </form>
        </div>
    )
}
