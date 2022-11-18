import {Button} from '@mui/material';
import {useState,useRef} from 'react';
import Display from './display';
import {useNavigate} from 'react-router-dom';

import './add.css'
function Add() {
    const[inputvalue,setval]=useState()
    const[data,setData]=useState(['J','M'])
    const[dblist,setDbList]=useState([])
    const[fetchflag,setfetchflag]=useState('false')
    const navigate=useNavigate();
    const  x=JSON.parse(localStorage.getItem('loginflag'))
    const inputelement = useRef('');
    const onAdd=()=>{
        
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ desc: inputvalue , userid: x})
        };
        fetch('/notes/add', requestOptions)
            .then(response => response.json()); 
        setDbList([...dblist])
        setfetchflag(!fetchflag)    
        }
        // setval(0)
    
    const logout=()=>{
        navigate("/")
        localStorage.setItem("loginvariable",false)

        // setval(0)
    }
   
    return (  
        <>
        <div className='Adding'>
            <div className="add"><input ref={inputelement} onChange={(e)=>setval(e.target.value)} id="outlined-basic" label="Add items" variant="outlined" /></div>
            <div className='=btn1'><Button variant="contained" onClick={onAdd}>Add</Button></div> 
            <div><Button variant="contained" onClick={logout}>Logout</Button></div> 
        </div>
        <Display array={data} setfetchflag={setfetchflag} fetchflag= {fetchflag} dblist={dblist} setDbList={setDbList} inputelement={inputelement}></Display>
        </>
    );
}

export default Add;