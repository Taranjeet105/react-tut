import React from "react";
import { useParams ,useLocation} from "react-router-dom";

const Service=()=>{
    let {name}=useParams()
    let location =useLocation()
    return (
        <>
            <h1>Hello Welcome to the service of {name}</h1>
            <h1>I am at {location.pathname}</h1>
            {location.pathname==='/service/shanty'?<h3> you are awesome</h3>:null}
            {/* <button onClick={()=>{
                history.goBack()
            }}>Back</button> */}
        </>
    )
}
export default Service