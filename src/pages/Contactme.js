import React, { Component } from "react";

const divStyle = { 
  color: "white",

};

class Contactme extends Component {

  


  render() {
    return (
<div className="container fontcolor" style={divStyle}>
  <div>
  <h2 className="fontcolor">Contact me</h2>
  </div>
  

<div className="grid-container container">
    <div className="row">
   <ul>
        <li>github : <a href="https://github.com/kroarguello" target="_blank" rel="noopener noreferrer"> https://github.com/kroarguello </a> </li>
        <li>linkId: <a href="http://linkedin.com/in/delmy-arguello-0904871b5" target="_blank" rel="noopener noreferrer"> http://linkedin.com/in/delmy-arguello-0904871b5</a></li>
        <li>email : <a href="mailto:kroarguelloadel@gmail.com" target="_blank" rel="noopener noreferrer"> kroarguelloadel@gmail.com</a></li>
        <li>Resume : <a href="https://drive.google.com/file/d/19R0QRJy5N6pVbMF5hzJghebS5xet7J6s/view?usp=sharing" target="_blank" rel="noopener noreferrer"> Delmy Arguello Resume</a></li>
        </ul>
    </div>

  </div>
 </div>
);
  }
}

export default Contactme;
