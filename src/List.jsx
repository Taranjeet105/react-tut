import React from "react";

function List(props){
    return(
        <>
            <span onClick={()=>{
            props.onSelect(props.id)}
            }>-</span>
            <li style={{display:"inline"}}>{props.val}</li>
            <br/>
        </>
    )
}
export default List