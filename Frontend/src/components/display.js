import {Button} from '@mui/material';
import { useEffect, useState} from 'react';
import './display.css'
import Card from './card'

function Display(props){
        let {setDbList,fetchflag,dblist,inputelement,setfetchflag}=props
        const[flag,setFlag]=useState(false)
        const[index1,setIndex]=useState()
        // setData([data,props])
    function Delete(listId){
        // array.splice(index,1)
        // setData((data)=> {let x=`${data}xx` ;return x})   Updater function
        const requestOptions = {
            method: 'DELETE',
        };
        fetch('/notes/delete/'+listId, requestOptions)
            .then(response => response.json()); 

        setDbList([...dblist])
        setfetchflag(!fetchflag)
    }



    function Edit(item,listId,i){
        inputelement.current.value=item
        setIndex(i)
       console.log(i)
        // setDbList([...dblist])    
        setFlag(!flag)
        
        // props.setData(props[index],item)
    }



    function Update(){
        
        let g=inputelement.current.value
        const requestOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ desc: g })
        };
        fetch('/notes/update/'+index1, requestOptions)
            .then(response => response.json());
        setFlag(!flag)
        // console.log(array)
        setDbList([...dblist])
        setfetchflag(!fetchflag)
    }

    const a = JSON.parse(localStorage.getItem('loginflag'))

    useEffect(()=>{
     fetch('/users/notes/'+a).then(res=>{
            if(res.ok){

                return res.json();
            }
        }).then(item=>setDbList(item))
    },[fetchflag])



    return(
        <>
        <div className='displayall'> 
                        {flag&&
                            <Button variant="contained" onClick={Update}>Update</Button>
                        }
                {
                dblist.map((item, index)=>(
                    <Card key={item.id} listId={item.id} i={item} item= {item.desc} index= {index} flag={flag} Delete={Delete} Edit={Edit}/>
                    
                ))
                }
        </div>
        </>
    );
}
export default Display;