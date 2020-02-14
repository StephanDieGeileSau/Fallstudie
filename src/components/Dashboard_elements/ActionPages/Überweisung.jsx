import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from "axios"

const Today = new Date
const day = Today.getDate()
const month = Today.getMonth() + 1
const year = Today.getFullYear()
const tday = day+"."+month+"."+year


export default function Überweisung({match}) {
    const current_user_id = match.params.id


    const [values, setValues] = useState({
        user : current_user_id,
        date: tday,
        purpose:"",
        receipient: "",
        int: "",
        iban:"",
        value: ""
      }
    );

    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value})
      };

    function toInt (){
        const x = parseFloat(values.int) * -1
        values.value = x
    }

    function isFloat(n){
        return Number(n) === n && n % 1 !== 0;
    }

    function handleAddElement(){
        
        toInt()

        if (values.value === "" | values.purpose === "" | values.receipient === "" | values.iban === "" ) return
        if (Number.isInteger(values.value) === false | isFloat(values.value) === false ){
        axios.post("https://fallstudie-dhbw.firebaseio.com/transactions.json", values).then(
            console.log("Posted sucessfully to Database")
        )
        setValues({
            user : current_user_id,
            date: tday,
            purpose:"",
            receipient: "",
            int: "",
            value: "",
            iban:"",
          })}
        else return
    }

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
                  <td><TextField value={values.receipient} onChange={handleChange("receipient")} label="Empfänger" variant="outlined" /></td>
                  <td><TextField value={values.iban} onChange={handleChange("iban")} label="IBAN" variant="outlined" /></td>                
                </tr>
                <tr>
                    <td><TextField value={values.purpose} onChange={handleChange("purpose")} label="Betreff" variant="outlined" /></td>
                    <td><TextField value={values.int} onChange={handleChange("int")} label="Betrag" variant="outlined" /></td>
                </tr>
                <tr>
                <td colspan="2"><br></br> <Button onClick={handleAddElement}  variant="contained">Überweisen</Button></td>
                </tr>

        </table>
        </div>
        </React.Fragment>
    )
}
