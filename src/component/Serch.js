import React,{useEffect, useState} from 'react'

const Serch = (props) => {
    const[serch,setSerch]=useState("");

    const handleChange=((e)=>{
        setSerch(e.target.value);
       
    })
    useEffect(()=>{
        props.onSerch(serch);
    },[serch]);
  return (
    <div style={{textAlign:"center"}}>
        <input type="text" placeholder='serch country' value={serch} onChange={handleChange}/>
    </div>
  )
}

export default Serch