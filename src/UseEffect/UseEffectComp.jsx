
import React, {useState,useEffect} from "react"
function UseEffectComp(){
    const [num,setNum]=useState(0)
    const [nums,setNums]=useState(0)
  {/*  useEffect(()=>{  will show alert every time render is being called
        alert("hello useEffect")
    })*/}    
      {/*  useEffect(()=>{  will show alert only once at begining when render is being called
        alert("hello useEffect")
    }),[]*/}         

    useEffect(()=>{   // whenever num changes
        alert("hello")
    },[num])

    return(
        <>
            
            <button onClick={()=>{setNum(num+1)}}>Click {num}</button>
            <button onClick={()=>{setNums(nums+1)}}>Click {nums}</button>
        </>
    )
}

export default UseEffectComp