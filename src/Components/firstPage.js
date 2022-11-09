import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import './firstPage.css';

function LandingPage() {
  return (
    <section className="jumbo-container">
      <h1 className="jumbo-text">Oni Oludamola</h1>
      <h3 className="jumbo-mini-text">Altschool Exam Project</h3>
      <h3 className="jumbo-mini-text">Question 1</h3>
      <Link to="/apiWorks">
        <button className="homeButton">Click me</button>
      </Link>
    </section>
  );
}

export default LandingPage;