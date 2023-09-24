import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./NewHomePage.css";
import Footer from "../Footer";

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
            {/* Use Link component for navigation */}
            <Link to="/homepage" className="rouned-box">
              Quiz
            </Link>
            <Link to="/meditate" className="rounded-box">
              Meditate
            </Link>
          </div>
        </div>

        <div className="careerimg">
          <img className="careerimg-link" src="ss.jpg" alt="Background" />
        </div>
      </div>
    </>
  );
}

export default NewHomePage;
