import React from "react";
import Jumbotron from "../Componenets/Ui/Jumbotron";
import Navbar from "../Componenets/Ui/Navbar";

const Base = props => {
  return (
    <div>
      <div>
        <Navbar />
        <Jumbotron />
      </div>
      <div>{props.children}</div>
    </div>
  );
};

export default Base;
