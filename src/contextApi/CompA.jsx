import React, { useContext } from "react";
// import { Context } from "./CompApp";
import CompB from "./CompB";
const CompA=()=>{
    // let data=useContext(Context)
    // return (<><h1>{data}</h1></>)
    return(<><CompB/></>)
}

export default CompA;