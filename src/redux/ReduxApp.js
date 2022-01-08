import React from "react";
import { ReactDOM } from "react";
import { useSelector ,useDispatch} from "react-redux";
import { incNum, decNum } from "./actions/index.js";
const ReduxApp=()=>{
    const mystate=useSelector(state=>state.changeNum);
    const dispatch=useDispatch();
    return(<>
        <button onClick={()=>{dispatch(decNum())}}>-</button>
        <span>{mystate}</span>
        <button onClick={()=>{dispatch(incNum())}}>+</button>
    </>)
}

export default ReduxApp