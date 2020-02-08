import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import React, {useState, useEffect} from 'react'
import uuidv4 from "uuid/v4"
import axios from "axios"
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import {withRouter } from 'react-router-dom';


//style for Modal
function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

const Registration = (props) => {

    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const [password2, setPassword2] = useState("")
    const [error, setError] = useState(false);

    const [values, setValues] = useState({
        id : uuidv4(),
        email:"",
        password:"",
        name: "",
        lastname: "",
        adress:"",
        zip_code:"",
        city:"",
        phone:""
      }
    );

    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value})
      };

    const handleChangePW = prop => event => {
        setPassword2(event.target.value)
    };

    function checkExisting (email){
        props.state.user.map(item=>{
                if (item.email === values.email){
                    setOpen(true)
                }
            })    
    }

    useEffect(() => {
            setError(password2 !== values.password);
    }, [password2, values.password])
  
    function handleAddElement(){
        checkExisting()
        if (open) return 
        if (values.email === "" | values.password === "" | values.name === "" | values.lastname === "" | 
        values.adress === "" | values.zip_code === "" | values.city === "" | values.phone === "")  return
        axios.post("https://fallstudie-dhbw.firebaseio.com/persons.json", values).then(
            console.log("Posted sucessfully to Database")
        )
        setValues({
            id: uuidv4(),
            email:"",
            password:"",
            name: "",
            lastname: "",
            adress:"",
            zip_code:"",
            city:"",
            phone:""
          });
        setPassword2("")
    }

    const handleClose = () => {
        setOpen(false);
      };


    return (
        <div>
            <div>
                <a href="fts_konto.htm">
                    <h1 class="ntc">NTC</h1>
                </a>
            </div>
            <div>
                <h5 class="ntc2">Banking </h5>
            </div>
            <form noValidate autoComplete="off">
              <table>
                <tr>
                  <td colspan="2"><TextField id="col" value={values.email} onChange={handleChange("email")} label="E-Mail" variant="outlined" /></td>
                </tr>
                <tr>
                  <td><TextField type={false ? 'text' : 'password'} value={values.password} onChange={handleChange("password")} label="Passwort" variant="outlined" /></td>
                  <td><TextField type={false ? 'text' : 'password'} value={password2} error={error} onChange={handleChangePW()} label="Passwort wiederholen" variant="outlined" /></td>
                </tr>
                <tr>
                  <td><TextField value={values.name} onChange={handleChange("name")} label="Name" variant="outlined" /></td>
                  <td><TextField value={values.lastname} onChange={handleChange("lastname")}label="Nachname" variant="outlined" /></td>
                </tr>
                <tr>
                  <td><TextField value={values.adress} onChange={handleChange("adress")}label="Adresse" variant="outlined" /></td>
                  <td><TextField value={values.zip_code} onChange={handleChange("zip_code")}label="Postleitzahl" variant="outlined" /></td>
                </tr>
                <tr>
                  <td><TextField value={values.city} onChange={handleChange("city")} label="Stadt" variant="outlined" /></td>
                  <td><TextField value={values.phone} onChange={handleChange("phone")}label="Telefonnummer" variant="outlined" /></td>
                </tr>
                <tr>
                  <td colspan="2"><br></br><Button id="click" disabled={error} onClick={handleAddElement} variant="contained">Registrieren</Button></td>
                </tr>
              </table>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={open}
                    onClose={handleClose}
                >
                    <div style={modalStyle} className={classes.paper}>
                    <h2 id="simple-modal-title">Benutzer existiert bereits!</h2>
                    <p id="simple-modal-description">
                        Ein Nutzer mit dieser Email Adresse exisitert bereits. 
                        Bitte loggen Sie sich ein.
                    </p>
                    </div>
                </Modal>
            </form>
        </div>
    )
}
export default withRouter(Registration);