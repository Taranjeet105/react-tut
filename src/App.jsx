import React from "react";
import Card from './Card'
import SeriesNames from './Series'


function App(){
    return(<>
        {SeriesNames.map(seriesName=>{
         return(<Card src={seriesName.src} title={seriesName.title} link={seriesName.link}/>) 
        })}
      </>)
    
}
export default App
