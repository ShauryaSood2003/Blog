import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import ClearIcon from '@mui/icons-material/Clear';
import { useEffect, useState } from 'react';
const Alert = ({ message }:{message:string}) => {
    const [isVisible,setVisible]=useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setVisible(false);
        },5000);
    },[])
  return (
   <>
    {
        isVisible?
            <div className="rounded-md p-4 bg-red-600 text-white w-auto absolute bottom-10 left-[10%] md:left-[40%] flex space-x-4 border-l-8 border-red-800 ">
                <ErrorOutlineIcon style={{fontSize:30,marginTop:2}}/>
                <h1 className='text-2xl font-bold ' >{message}</h1>
                <ClearIcon onClick={()=>{setVisible(false)}} style={{fontSize:30,marginTop:2,marginLeft:20}}/>
            </div>
            :
            null
    }
   </>
  );
}

export default Alert;
