import React, { Component } from "react";
import image from "./images/password_generator.png";
import workday_scheduler from "./images/workday_scheduler.png";
import Project1 from "./images/Project1.png";
import notetaker from "./images/notetaker.png";
import myteam from "./images/myteam.png";
import project2 from "./images/project2.png"

class Porfolio extends Component {

  render() {
    return (
      <div className="container fontcolor">
      <div>
      <h2 className0="fontcolor">Portfolio</h2>
      </div>
      <div className="responsive ">
        <div className="gallery">
          <a target="_blank" href=" https://kroarguello.github.io/Homework-3/.">
            <img src={image} alt="password" width="600" height="400"></img>
          </a>
          <div className="desc">Password Generator</div>
        </div>
      </div>
      
      
      <div className="responsive">
        <div className="gallery">
          <a target="_blank" rel="noreferrer" href="https://kroarguello.github.io/HW05WDS/">
            <img src={workday_scheduler} alt="dayscheduler" width="600" height="400"></img>
          </a>
          <div className="desc">Day Scheduler </div>
        </div>
      </div>
      
      <div className="responsive">
        <div className="gallery">
          <a target="_blank" rel="noreferrer" href="https://wrugby1.github.io/Project1/">
            <img src={Project1} alt="project1" width="600" height="400"></img>
          </a>
          <div className="desc">Project 1 </div>
        </div>
      </div>
      
      <div className="responsive">
        <div className="gallery">
          <a target="_blank" rel="noreferrer" href="https://notetakerarg.herokuapp.com/">
            <img src={notetaker} alt="notetaker" width="600" height="400"></img>
          </a>
          <div className="desc">Note Tacker </div>
        </div>
      </div>
      
      <div className="responsive">
        <div className="gallery">
          <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1yXOC4yKpLKCHAURaqOQeA45AQAakF8va/view">
            <img src={myteam} alt="myteam" width="600" height="400"></img>
          </a>
          <div className="desc">My Team (Node command line) </div>
        </div>
      </div>
      
      
      
      <div className="responsive">
        <div className="gallery">
          <a target="_blank" rel="noreferrer" href="https://leftover-wizard.herokuapp.com/">
            <img src={project2} alt="Mountains" width="600" height="400"></img>
          </a>
          <div className="desc">Project 2 - Leftover Wizard</div>
        </div>
      </div>
      
      <div class="clearfix"></div>
        
      </div>  
      
    );
  }
}

export default Porfolio;
