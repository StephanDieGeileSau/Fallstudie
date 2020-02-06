import React from 'react'
import { Link } from 'react-router-dom';


export default function Dashboard({match}) {

    const current_user_id = match.params.id

    return (
        <div>
            <Link to="/login">NTC Banking</Link>

            Dashboard
        </div>
    )
}
