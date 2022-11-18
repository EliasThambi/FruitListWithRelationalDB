import TextField from '@mui/material/TextField';
import { Button , Link } from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {useState} from "react"
import './login.css'


function Login() {
    const navigate=useNavigate();
    const [role,setRole]=useState('');
    const [user,setUsername]=useState('');
    const [flag1,setflag1]=useState(false)
    const [idval,setId]=useState('')
    const [pass,setPassword]=useState('')
    function toRegisterPage(){
        navigate("/register")
    }
     async function submitlogin(){
        localStorage.setItem("loginvariable",true)
        // setPassword(role)
        // setUserName(user)
         
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userName:user , password: role})
        };

        fetch('/users/find',requestOptions).then((res)=>res.json()
        ).then((idval)=>{
            setId(idval);
            localStorage.setItem('loginflag',idval);
            if(idval!==false){
                    navigate('/cart')
                    
                }
                else{
                    console.log(idval)
                    setflag1(!flag1)
                } })
    
            // if(idval!==''){
            //     localStorage.setItem('loginflag',idval)
            //     navigate('/cart')
                
            // }
            // else{
            //     setflag1(!flag1)
            // } 
    }
    
    return ( 
    <>
    <div className="signin">
            <h1>SIGN IN</h1>
            <div className="name"><TextField  onChange={(e)=>setUsername(e.target.value)} id="outlined-basic" label="Enter name" variant="outlined" /></div><br></br>
            <div className="pwd"><TextField  onChange={(e)=>setRole(e.target.value)}id="outlined-basic" label="Enter password" variant="outlined" /></div><br></br>
            {flag1&&
            <p><span>Wrong Username or password</span></p>}
            <Button variant="contained" onClick={submitlogin}>Submit</Button><br></br>
            <Link onClick={toRegisterPage}>Sign Up</Link>
            <p>Enter password : <span>admin</span> <br></br> Enter password : <span>1234</span> to login</p>
    </div>
    </>
     );
}

export default Login;