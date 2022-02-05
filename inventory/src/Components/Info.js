import React from "react";
import About from "./About";

function Info(props){
    return(
    <div>
        <About />
        <p>Tel: {props.Telphone}</p>
        <p>Name: {props.Name}</p>
    </div>
    );
}

export default Info;