import './App.css';
import Navbar from "./Navbar/Navbar";

// import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="app">
      <>
        <Navbar />
        {/* <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/bodyfat" element={<BodyFat />} />
            <Route exact path="/bmi" element={<BMI />} />
          </Routes>
        </BrowserRouter> */}
      </>
    </div>
  );
}

export default App;
