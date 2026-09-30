import { useState } from "react";

function Navbar() {

  const [showResume, setShowResume] = useState(false);

  return (
    <>
      <nav className="navbar">

        <div className="brand">
          <div className="brand-logo">
            RS
          </div>

          <div className="brand-name">
            Santhosh Kumar R
          </div>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>

        <button
          className="resume-btn"
          onClick={() => setShowResume(true)}
        >
          Resume
        </button>

      </nav>

      {showResume && (
        <div className="resume-overlay">

          <div className="resume-modal">

            <button
              className="resume-close"
              onClick={() => setShowResume(false)}
            >
              ✕
            </button>

            <iframe
              src="/Santhosh_Kumar_R.pdf"
              title="Resume"
            ></iframe>

          </div>

        </div>
      )}
    </>
  );
}

export default Navbar;