import React from "react";
function Card(props){
    return (<>
    <div className="card" style={{width: "1rem;"}}>
    <img src={props.src} alt="image"/>
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href={props.link} target="_blank" className="btn btn-primary">Watch Now</a>
    </div>
  </div>
  </>)
  
  }
// src, titile link
  export default Card