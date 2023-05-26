
import {useEffect, useState} from 'react'
import Button from '@mui/material/Button';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'

import './Assets/styles.css'

function DynamicButton({items, index, item, dataDisable}) {

    const taskOne = useSelector((state) => state.user.taskOne);
    const taskTwo = useSelector((state) => state.user.taskTwo);
    const taskThree = useSelector((state) => state.user.taskThree);
    const taskFour = useSelector((state) => state.user.taskFour);
    const taskFive = useSelector((state) => state.user.taskFive);
    const taskSix = useSelector((state) => state.user.taskSix);
  
    console.log({taskOne})
  



const handleNavigate = ()=>{

    if(taskOne[0].one === true){}
    navigate(`/task/:${items.id}`,{state:{items, index}})
}

    const navigate = useNavigate()
  return (
   <>
    {dataDisable === true ?
    <Button className='active' disabled={dataDisable}  size="small"> ready </Button>
    :
    <Button   onClick={handleNavigate} size="small"> {item.task} </Button>
    }
   </>
    
  )
}

export default DynamicButton
