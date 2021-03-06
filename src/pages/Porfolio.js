import React, { Component } from "react";
import image from "./images/password_generator.png";
import workday_scheduler from "./images/workday_scheduler.png";
import Project1 from "./images/Project1.png";
import notetaker from "./images/notetaker.png";
import myteam from "./images/myteam.png";
import project2 from "./images/project2.png"

const divStyle = {
  color: "white",

};

class Porfolio extends Component {

  render() {
    return (
      <div className="container" style={divStyle}>
        <div>
          <h1>Portfolio</h1>
        </div>

        <div className="responsive row row-cols-1 row-cols-md-3">

          <div className="desc"><h3>Password Generator</h3></div>
          <div className="gallery">
            <a target="_blank" href=" https://kroarguello.github.io/Homework-3/.">
              <img src={image} alt="password" width="600" height="400"></img>
            </a>
            <div className="desc">
              <a target="_blank" href=" https://kroarguello.github.io/Homework-3/.">
                Github : Password Generator
             </a>
            </div>
          </div>
        </div>


        <div className="responsive  row row-cols-1 row-cols-md-3">
        <div className="desc"><h3>Day Scheduler</h3> </div>
          <div className="gallery">
            <a target="_blank" rel="noreferrer" href="https://kroarguello.github.io/HW05WDS/">
              <img src={workday_scheduler} alt="dayscheduler" width="600" height="400"></img>
            </a>
            </div>
            <div className="desc">
              <a target="_blank" href=" # ">
                Github 
                
             </a>
            </div>
        </div>


        <div className="responsive  row row-cols-1 row-cols-md-3">
        <div className="desc"><h3>Project 1 </h3></div>

          <div className="gallery">
            <a target="_blank" rel="noreferrer" href="https://wrugby1.github.io/Project1/">
              <img src={Project1} alt="project1" width="600" height="400"></img>
            </a>
          </div>
          <div className="desc">
              <a target="_blank" href=" # ">
                Github 
                
             </a>
            </div>

        </div>

        <div className="responsive  row row-cols-1 row-cols-md-3">
        <div className="desc"><h3>Note Tacker </h3></div>

          <div className="gallery">
            <a target="_blank" rel="noreferrer" href="https://notetakerarg.herokuapp.com/">
              <img src={notetaker} alt="notetaker" width="600" height="400"></img>
            </a>
          </div>
          <div className="desc">
              <a target="_blank" href=" # ">
                Github 
                
             </a>
            </div>
        </div>

        <div className="responsive  row row-cols-1 row-cols-md-3">
        <div className="desc"><h3>My Team (Node command line) </h3></div>

          <div className="gallery">
            <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1yXOC4yKpLKCHAURaqOQeA45AQAakF8va/view">
              <img src={myteam} alt="myteam" width="600" height="400"></img>
            </a>
          </div>
          <div className="desc">
              <a target="_blank" href=" # ">
                Github 
                
             </a>
            </div>
        </div>



        <div className="responsive  row row-cols-1 row-cols-md-3">
        <div className="desc"><h3>Project 2 - Leftover Wizard</h3></div>

          <div className="gallery">
            <a target="_blank" rel="noreferrer" href="https://leftover-wizard.herokuapp.com/">
              <img src={project2} alt="Mountains" width="600" height="400"></img>
            </a>
          </div>
          <div className="desc">
              <a target="_blank" href=" # ">
                Github 
                
             </a>
            </div>
        </div>

        <div class="clearfix"></div>

      </div>

    );
  }
}

export default Porfolio;
