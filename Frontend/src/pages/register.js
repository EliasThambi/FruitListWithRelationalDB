import TextField from '@mui/material/TextField';
import { Button , Link } from '@mui/material';
import './register.css'
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';

function Register() {
    const navigate=useNavigate()
    const [regusername,setregusername]=useState('')
    const [regpassword,setregpassword]=useState('')
    const [regUsername,setregUsername]=useState('')
    const [regPassword,setregPassword]=useState('')
    function registerUser(){
        // setregUsername(regusername)
        // setregPassword(regpassword)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userName:regusername , password: regpassword})
        };
        fetch('/users/add', requestOptions)
            .then(response => response.json());
            navigate("/")
    }
    
    function toSignPage(){
        navigate("/")
    }
    return ( 
        <>
         <div className="signup">
            <h1>Register</h1>
            <div className="name"><TextField onChange={(e)=>(setregusername(e.target.value))}  id="outlined-basic" label="Enter name" variant="outlined" /></div><br></br>
            <div className="pwd"><TextField  onChange={(e)=>(setregpassword(e.target.value))}id="outlined-basic" label="Enter password" variant="outlined" /></div><br></br>
            
            <Button variant="contained" onClick={registerUser}>Submit</Button><br></br>
            <Link onClick={toSignPage}>Already a user</Link>
            
        </div>
        
        </>
     );
}

export default Register;