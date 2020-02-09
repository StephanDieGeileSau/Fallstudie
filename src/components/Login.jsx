import React, {useState, useEffect} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import axios from "axios"
import "./fts_style.css"


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
  
  

export default function Login(props) {

    //get database download of users

    const [user, setUser] = useState("")

    function getDatabaseUpdate(){
        axios.get("https://fallstudie-dhbw.firebaseio.com/persons.json").then(
        response =>   {
            const fetchedOrders = [];
            for (let key in response.data){
                fetchedOrders.push({
                    ...response.data[key], 
                    id : key
                })
            setUser(fetchedOrders)
            }
        })
    }

    useEffect(() => {
        getDatabaseUpdate()
    }, [])

    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const [values, setValues] = useState({
        email : "",
        password : ""
      }
    );

    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value})
    };

    function handleLogin(){
        console.log(user)
        user.map(item =>{
            if (item.email.toLowerCase() === values.email.toLowerCase() && item.password === values.password){
                props.history.push("/dashboard/" + item.id)
            }
            else{
                handleOpen()
            }
        })
        console.log(user)
    }

    return (
        <div>
            <div>
                <Link to ={"/login"} class='ntc'>NTC</Link>
            </div>
            <div>
                <h5 class="ntc2">Banking </h5>
            </div>
            <form noValidate autoComplete="off">
                <table>
                    <tr>
                        <td><TextField value={values.email} onChange={handleChange("email")} label="E-Mail" variant="outlined" /></td>
                    </tr>
                    <tr>
                        <td><TextField type={false ? 'text' : 'password'} value={values.password} onChange={handleChange("password")} label="Passwort" variant="outlined" /></td>
                    </tr>
                    <tr>
                        <td><br></br><br></br></td>
                    </tr>
                    <tr>
                        <td><Button id="click" onClick={handleLogin} variant="contained">Login</Button></td>
                    </tr>
                    <tr>
                        <td><Button id="click" variant="contained" component={Link} to={'/registration'}>Registrieren</Button></td>
                    </tr>
                </table>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={open}
                    onClose={handleClose}
                >
                    <div style={modalStyle} className={classes.paper}>
                    <h2 id="simple-modal-title">Login Fehlgeschlagen!</h2>
                    <p id="simple-modal-description">
                        Passwort oder Benutzername falsch.
                    </p>
                    </div>
                </Modal>
            </form>
        </div>
    )
}
