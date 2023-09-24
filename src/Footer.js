import React from "react";

export default function Footer() {
  return (
    <div>
      <footer
        className="text-center text-white"
        style={{ marginTop: "20px", backgroundColor: "#333333" }}
      >
        <div
          className="text-center text-light p-3"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            color: "white",
          }}
        >
          Developed by the members of ThinkFit
        </div>
      </footer>
    </div>
  );
}
