import React from "react";

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


export default YourInfo;
