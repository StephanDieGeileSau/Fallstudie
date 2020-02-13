import React from 'react'
import { Link } from 'react-router-dom';

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
        <div>
            Kredit
        </div>
        </React.Fragment>
    )
    // return (
    //     <div id="kredit">
    //         <div>
    //             <a href="fts_konto.htm">
    //                 <h1 class=" ntc">NTC</h1>
    //             </a>
    //         </div>
    //         <div>
    //             <h5 class="ntc2 ">Banking </h5>
    //         </div>

    //         <table>
    //             <form action="mailto:'ntc.banking2020@gmail.com'" method="post">
    //                 <tr>
    //                     <th colspan="3">
    //                         <h3>Jetzt Kreditangebot anfordern:</h3>
    //                     </th>
    //                 </tr>
    //                 <tr>
    //                     <th class="formular">Wie viel Geld brauchen Sie?</th>
    //                     <td colspan="2"><input placeholder="Euro, Cent" class="daten" type="text" name="kredithoehe"/></td>
    //                 </tr>
    //                 <tr>
    //                     <th class="formular">Wofür brauchen Sie das Geld?</th>
    //                     <td colspan="2"><select class="daten" name="art" size="1">
    //                         <option value="1">Auto & Mobilität</option>
    //                         <option value="2">Wohnung & Möbel</option>
    //                         <option value="3">Urlaub</option>
    //                         <option value="4">Elektronik</option>
    //                         <option value="5">Geschäftlich</option>
    //                         <option value="6">Ausbildung</option>
    //                         <option value="7">Kredit ablösen</option>
    //                         <option value="8">Giro-Konto ausgleichen</option>
    //                         <option value="9">Andere</option>
    //                         </select>
    //                     </td>
    //                 </tr>
    //                 <tr>
    //                     <th class="formular">Wie ist Ihre berufliche Situation?</th>
    //                     <td colspan="2"><select class="daten" name="art" size="1">
    //                         <option value="10">Geschäftsführender Gesellschafter</option>
    //                         <option value="11">Leitender Angestellter</option>
    //                         <option value="12">Angestellter</option>
    //                         <option value="13">Beamter</option>
    //                         <option value="14">Freiberufler</option>
    //                         <option value="15">Sonstiger Selbstständiger</option>
    //                         </select>
    //                     </td>
    //                 </tr>
    //                 <tr>
    //                     <th class="formular">Was ist Ihr Beziehungsstatus?</th>
    //                     <td colspan="2"><select class="daten" name="art" size="1">
    //                         <option value="20">Ledig</option>
    //                         <option value="21">Verheiratet</option>
    //                         <option value="22">Verwitwet</option>
    //                         <option value="23">Geschieden</option>
    //                         <option value="24">Getrennt lebend</option>
    //                         <option value="25">Es ist kompliziert</option>
    //                         </select>
    //                     </td>
    //                 </tr>
    //                 <tr>
    //                     <th class="formular">Wie ist Ihre derzeitige Wohnsituation?</th>
    //                     <td colspan="2"><select class="daten" name="art" size="1">
    //                         <option value="30">Eigentümer</option>
    //                         <option value="31">Mieter</option>
    //                         <option value="32">Sonstige</option>
    //                         </select>
    //                     </td>
    //                 </tr>
    //                 <tr>
    //                     <th class="formular">Besitzen Sie ein Auto?</th>
    //                     <td><input type="radio" name="auto" value="ja">Ja</input>
    //                     </td>
    //                     <td><input type="radio" name="auto" value="nein">Nein</input>
    //                     </td>
    //                 </tr>
    //                 <tr>
    //                     <th class="formular">Wie hoch ist Ihr monatliches Einkommen?</th>
    //                     <td colspan="2"><input placeholder="Euro, Cent" class="daten" type="text" name="einkommen"/></td>
    //                 </tr>
    //                 <tr>
    //                     <th class="formular">Wie hoch sind Ihre monatlichen Ausgaben?</th>
    //                     <td colspan="2"><input placeholder="Euro, Cent" class="daten" type="text" name="ausgaben"/></td>
    //                 </tr>
    //                 <tr>
    //                     <td colspan="3"><br></br><input class="button" type="Submit" value="Abschicken"/></td>
    //                 </tr>
    //             </form>
    //         </table>
    //     </div>
    // )
}
