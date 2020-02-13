import React from 'react'
import { Link } from 'react-router-dom';

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
            Überweisung
        </div>
        </React.Fragment>
    )
    // return (
    //     <div>
    //         <div>
    //             <a href="fts_konto.htm">
    //                 <h1 class="ntc">NTC</h1>
    //             </a>
    //         </div>
    //         <div>
    //             <h5 class="ntc2">Banking </h5>
    //         </div>

    //         <table>
    //             <form action="beratungsgespraech.php" method="post">
    //                 <tr>
    //                     <th colspan="2">
    //                         <h3>Überweisungsauftrag abgeben:</h3>
    //                     </th>
    //                 </tr>
    //                 <tr>
    //                     <th class="formular">Zahlungsempfänger:</th>
    //                     <td class="daten"><input placeholder="Name, Vorname" class="daten" type="text" name="empfaenger"/></td>
    //                 </tr>
    //                 <tr>
    //                     <th class="formular">IBAN:</th>
    //                     <td><input placeholder="DE00 0000 0000 0000 0000 00" class="daten" type="text" name="iban"/></td>
    //                 </tr>
    //                 <tr>
    //                     <th class="formular">BIC:</th>
    //                     <td class="daten"><input placeholder="Bei Eingabe von IBAN nicht erforderlich." class="daten" type="text" name="bic"/></td>
    //                 </tr>
    //                 <tr>
    //                     <th class="formular">Betrag:</th>
    //                     <td class="daten"><input placeholder="Euro, Cent" class="daten" type="text" name="betrag"/></td>
    //                 </tr>
    //                 <tr>
    //                     <th class="formular">Verwendungszweck:</th>
    //                     <td class="daten"><input placeholder="Maximal 54 Stellen" class="daten" type="text" name="verwendungszweck"/></td>
    //                 </tr>
    //                 <tr>
    //                     <td colspan="2"><br></br><input class="button" type="Submit" value="Abschicken"/></td>
    //                 </tr>
    //             </form>
    //         </table>
            
    //     </div>
    // )
}
