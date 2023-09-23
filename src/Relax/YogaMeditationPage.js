// JavaScript file (YogaMeditationPage.js)
import React, { useState, useEffect } from 'react';
import './YogaMeditationPage.css';
import bellSound from './change.mp3'; // Replace with the correct path to your audio file


const asanasData = [
  {
    name: 'Sukhasana',
    image: 'sukhasana.jpg', // Replace with your image filename
  },
  {
    name: 'Chakrasana',
    image: 'chakrasana.jpg', // Replace with your image filename
  },
  {
    name: 'Sarvangasana',
    image: 'sarvangasana.jpg', // Replace with your image filename
  },
  // Add more asanas with names and image filenames here
];

function YogaMeditationPage() {
  const [timer, setTimer] = useState(0);
  const [currentAsanaIndex, setCurrentAsanaIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

// Inside the useEffect function
useEffect(() => {
  let interval;

  if (isRunning) {
    interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);

      // Check if the timer is a multiple of 30 seconds and play the sound
      if (timer % 30 === 0) {
        setCurrentAsanaIndex((prevIndex) =>
          prevIndex === asanasData.length - 1 ? 0 : prevIndex + 1
        );

        // Create an Audio element and play the sound
        const audio = new Audio(bellSound);
        audio.play();
      }
    }, 1000);
  }

  return () => clearInterval(interval);
}, [timer, isRunning]);


  const handleStartButtonClick = () => {
    setIsRunning(true);
  };

  const handlePauseButtonClick = () => {
    setIsRunning(false);
  };

  const handleStopButtonClick = () => {
    setIsRunning(false);
    setTimer(0); // Reset the timer
  };

  return (
    <div className="yoga-meditation-page">
      <h1 className="page-title">
      Explore a holistic approach to enhancing mental well-being through guided yoga asanas</h1>
      <h2 className="page-title" >Follow the instructions for only 15 minutes / 900 Seconds everyday to attain calmness
    </h2>
      <div className="timer-container">
        <div className="timer">
          <strong>{timer} seconds</strong>
        </div>
        <div className="button-container">
          {!isRunning && (
            <button className="start-button" onClick={handleStartButtonClick}>
              Start
            </button>
          )}
          {isRunning && (
            <div>
              <button className="pause-button" onClick={handlePauseButtonClick}>
                Pause
              </button>
              <button className="stop-button" onClick={handleStopButtonClick}>
                Stop
              </button>
            </div>
          )}
        </div>
      </div>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <div className="asana-container">
        <img
          className="yoga-asana-image"
          src={`./${asanasData[currentAsanaIndex].image}`}
          alt={asanasData[currentAsanaIndex].name}
        />
        <div className="yoga-asana-name">
          <strong>{asanasData[currentAsanaIndex].name}</strong>
        </div>
      </div>
    </div>
  );
}

export default YogaMeditationPage;
