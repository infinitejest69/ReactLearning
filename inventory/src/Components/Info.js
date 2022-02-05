import React from "react";
import About from "./About";
import PropTypes from "prop-types";


function Info(props){
    return(
    <div>
        <About />
        <p>Tel: {props.Telphone}</p>
        <p>Name: {props.Name}</p>
    </div>
    );
}

Info.defaultProps = {
    Telphone: "No Number",
    Name: "No Name" ,
};

Info.propTypes = {
    Telphone: PropTypes.string,
    Name: PropTypes.string,
  };

export default Info;