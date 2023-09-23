// NewHomePage.js
import React, { useState } from "react";
import "./NewHomePage.css";

function NewHomePage() {
  const [showPages, setShowPages] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;

    if (scrollTop >= 300) {
      setShowPages(true);
    } else {
      setShowPages(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  const navigateToPage = (pageName) => {
    // Implement the navigation logic here, e.g., using React Router or other routing methods
    // For this example, we'll simply use a console.log statement to indicate the navigation.
    console.log(`Navigating to ${pageName} page`);
  };

  return (
    <>
      <div className="homepcontent">
        <div className="description">
          <h1 className="hometitle">Digital Well-being Hub</h1>
          <p className="maincontent">
            In today's fast-paced digital world, our mission is to create a
            mobile app and website that serve as a beacon of support for
            individuals grappling with the challenges posed by information
            overload, social media pressure, and online harassment. Our platform
            empowers users to prioritize their mental health and well-being
            while responsibly engaging with the digital realm.
          </p>
          <div className="buttons-container">
            <button
              className="rounded-button"
              onClick={() => navigateToPage("Quiz")}
            >
              Quiz
            </button>
            <button
              className="rounded-button"
              onClick={() => navigateToPage("X")}
            >
              Meditate
            </button>
          </div>
        </div>

        <div className="careerimg">
          <img className="careerimg-link" src="shutter.png" alt="Background" />
        </div>
      </div>
    </>
  );
}

export default NewHomePage;
