import React, { useState } from "react";
import './index.css'
function Form(){
    
    const [fullname,changefullN]=useState({
        fname:"",
        lname:""
    })
    function changeName(e){
        const {value,name}=e.target
        
        changefullN((prevState)=>{
            return {
                ...prevState,
                [name]:value
            }
            
            // if(name==="fname"){
            //     return {
            //         fname:value,
            //         lname:prevState.lname
            //     }
            // }else if(name==="lname"){
            //     return {
            //         fname:prevState.fname,
            //         lname:value
            //     }
            // }
        })
    }
    function onSubmit(e){
       e.preventDefault()
       alert("form submitted")
    }
    return(
        <>
        <h1>Hello {fullname.fname} {fullname.lname}</h1>
            <div className="input">
            <form onSubmit={onSubmit}>
                <input name="fname" onChange={changeName} placeholder="Enter Your fname" value={fullname.fname}/>
                <input name="lname" onChange={changeName} placeholder="Enter Your lname" value={fullname.lname}/>
                <button type="submit">Click me</button>
            </form>
                
            </div>
        </>
    )
}
export default Form