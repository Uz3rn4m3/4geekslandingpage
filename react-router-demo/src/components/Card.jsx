import React, { useState } from "react";


const Card = (props) => {
    return(
        <div  className="card text-center vh-100">
    <img className="card-img-top" src="https://via.placeholder.com/500x325" alt="Card image" />
    <div className="card-body">
      <h4 className="card-title" ><strong>Card title</strong></h4>
      <p className="card-text">{props.cardText}</p>
      <a href="#" className="btn btn-primary">Find Out More!</a>
    </div>
  </div>
     );
    }
    export default Card;