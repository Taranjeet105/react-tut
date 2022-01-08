import React, { createContext } from "react";
import CompA from "./CompA";
let Context=createContext() // directly sending data to compB instead of passing data from CompApp-->CompA-->CompB
const CompApp=(props)=>{

    return (
        <>
        <Context.Provider value={"Taranjeet singh"}> {/* what ever is inside this block can acces value of Context, even childrens of CompA */}
         
            <CompA/>
        </Context.Provider>
        </>
    )
}

export default CompApp;
export {Context}