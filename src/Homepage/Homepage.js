import React, { useEffect } from "react";
import "./Homepage.css";

import Start from "../Quiz/Start";

export default function Homepage({
  name,
  setName,
  selectedEducation,
  setSelectedEducation,
}) {
  useEffect(() => {
    document.title = "Home - Trajectory";
  }, []);

  return (
    <>
      <header className="banner">
        <div className="mainpagecontent">
          <div className="banner_description">
            <h1 className="description-title">Well-Being Assessment Quiz</h1>
            <p className="description-text">
            Are you curious about your overall well-being and mental health? 
            Take our Well-Being Assessment Quiz to gain valuable insights into various aspects of your life. 
            This quiz consists of thought-provoking questions that touch on topics like stress, relationships, 
            self-care, and personal growth. By answering these questions, you'll get a clearer understanding 
            of your well-being and discover areas where you can focus on improvement. 
            It's a great way to kickstart your journey towards a happier and healthier life!
            </p>
          </div>
          <div className="careerimg">
            
              <img className="careerimg-link" src="shutter.png" alt="Background" />
            
          </div>
        </div>

        <div className="banner_buttons">
          <a href="#form">
            <button className="button-start">Lets Dive In!</button>
          </a>
        </div>
      </header>
      <div id="form">
        <Start
          name={name}
          setName={setName}
          selectedEducation={selectedEducation}
          setSelectedEducation={setSelectedEducation}
        />
      </div>
    </>
  );
}
