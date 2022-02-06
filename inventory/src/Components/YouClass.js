import React from "react";
import PropTypes from "prop-types"

//Class based componenet with default props
class YourInfo extends React.Component {
constructor(props){
super(props)
}

  render() {
      return(
    <div>
      <h1>Your Info</h1>
      <p>Tel: {this.props.Telphone}</p>
        <p>Name: {this.props.Name}</p>
    </div>
    
      )}
  

}

// Set default props
YourInfo.defaultProps = {
    Telphone: "No Number",
    Name: "No Name" ,
  };

  YourInfo.propTypes = {
    Telphone: PropTypes.string,
    Name: PropTypes.string,
  };


export default YourInfo;
