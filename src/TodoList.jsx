import React, { useState } from "react";
import List from "./List"
function TodoList(){
    
    if(!localStorage.getItem("items")){
       localStorage.setItem("items",JSON.stringify([]))
    }
    let itemsInLocalStorage=JSON.parse(localStorage.getItem("items"))
    console.log(itemsInLocalStorage)
    const [currItem,setCurrItem]=useState("")
    const [listOfItems,setListOfItems]=useState(itemsInLocalStorage)
    function setItem(e){
        setCurrItem(e.target.value)
    }
    function addItem(e){
        setListOfItems((oldValues)=>{
            localStorage.setItem("items",JSON.stringify([...oldValues,currItem]))
            itemsInLocalStorage=[...oldValues,currItem]
            return [...oldValues,currItem]
        })
        
        setCurrItem("")
    }
    function deleteItem(id){
        console.log(id)
        console.log("deleted")
        setListOfItems((oldValues)=>{
            return oldValues.filter((val,indx)=>{
                return id!==indx
            })
        })
        console.log(listOfItems)
        localStorage.setItem("items",JSON.stringify(listOfItems))
        itemsInLocalStorage=listOfItems
    }
    return (<>
        <div className="main_div">
            <div className="List">
            <h1>Todo List</h1>
                <input onChange={setItem} type="text" value={currItem}/>
                <br/>
                <button onClick={addItem}>Click</button>
                <ol>
                <h2>Items</h2>
                {listOfItems.map((item,idx)=>{
                    return <List
                    id={idx}
                    key={idx}
                    val={item}
                    onSelect={deleteItem}
                    />
                })}
                </ol>
            </div>
        </div>
    </>)
}
 export default TodoList