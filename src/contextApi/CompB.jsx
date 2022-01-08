import React, {useContext} from "react";
import { Context } from "./CompApp";

const CompB=()=>{
    let data=useContext(Context)
    return (<><h1>{data}</h1></>)
    
 { /*return( <Context.Consumer>{
        (val)=>{
            return(<h1>{val}</h1>)
        }
    }</Context.Consumer>
    )
return (<><h1>hello</h1></>)*/}
}

export default CompB;