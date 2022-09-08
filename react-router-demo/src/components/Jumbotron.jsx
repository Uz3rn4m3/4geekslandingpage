import React, { useState } from "react";
import { JumboLink } from "react-router-dom";

const Jumbotron = (props) => {
    return(
        <div className="jumbotron jumbotron-fluid alert alert-info">
            <div className="container">
  <h1 className="display-4">A Warm Welcome!</h1>
  <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid aimilique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat. </p>
  <hr className="my-4"/>
  <p className="lead">
    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </p>
  </div>
</div>
    );
};
export default Jumbotron