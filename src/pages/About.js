import React from "react";
import image from "./images/delmy.JPG";
//import fondo from "./images/fondo1.jpg";


function About() {
  return (
    <div className="container" >
    
<div className="row fontcolor" >
      <div className="col-md">
      <h1>About me</h1>
      </div>
</div>

<div className="row fontcolor" >
      <div className="col-md">
      <img src={image} alt="Delmy" width="200" height="200" className="float-left" />
      
    
      </div>
      <div className="col-md">
      <p>I am a student of Full Stack Develompent Bootcamp , looking for a new opportunities to 
          to grow  in this field. I love using my skills to create new and functional things and 
          what better field than in application development where I can show my knowledge acquired during my studies. </p>
         <p>I like to learn new things and add more knowledge to my skills as I gain experience.</p>    
      </div>
</div>


    
</div>

  );
}

export default About;
