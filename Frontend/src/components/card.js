import {Button} from '@mui/material';
import '../components/card.css'
function Card({listId,item, index, Edit, Delete,flag,i}) {
    return ( <div className='card'>
    <div className='items'>
    {index+1}.
    {item}
    </div>
    <div className="buttons">
    
    <Button variant="contained"  onClick={()=>Edit(item,index,listId,i)} >Edit</Button>
    {!flag&&
    <Button variant="contained" onClick={()=>Delete(listId)} >Remove</Button>
    }
    </div>
</div> );
}

export default Card;