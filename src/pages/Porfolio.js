import React, { Component } from "react";


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
            <img src="css/password_generator.png" alt="password" width="600" height="400"></img>
          </a>
          <div className="desc">Password Generator</div>
        </div>
      </div>
      
      
      <div className="responsive">
        <div className="gallery">
          <a target="_blank" href="https://kroarguello.github.io/HW05WDS/">
            <img src="css/workday_scheduler.png" alt="dayscheduler" width="600" height="400"></img>
          </a>
          <div className="desc">Day Scheduler </div>
        </div>
      </div>
      
      <div className="responsive">
        <div className="gallery">
          <a target="_blank" href="https://wrugby1.github.io/Project1/">
            <img src="css/Project1.png" alt="project1" width="600" height="400"></img>
          </a>
          <div className="desc">Project 1 </div>
        </div>
      </div>
      
      <div className="responsive">
        <div className="gallery">
          <a target="_blank" href="https://notetakerarg.herokuapp.com/">
            <img src="css/notetaker.png" alt="notetaker" width="600" height="400"></img>
          </a>
          <div className="desc">Note Tacker </div>
        </div>
      </div>
      
      <div className="responsive">
        <div className="gallery">
          <a target="_blank" href="">
            <img src="css/myteam.png" alt="myteam" width="600" height="400"></img>
          </a>
          <div className="desc">My Team (Node command line) </div>
        </div>
      </div>
      
      
      
      <div className="responsive">
        <div className="gallery">
          <a target="_blank" href="https://leftover-wizard.herokuapp.com/">
            <img src="css/project2.png" alt="Mountains" width="600" height="400"></img>
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
