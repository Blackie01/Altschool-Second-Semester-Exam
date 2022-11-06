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
        <button>Click me</button>
      </Link>
    </section>
  );
}

export default LandingPage;

/*  
On the home page
we'd have the name
then we'd have some intro text typing out (all text can type out and all)
will detail matric number
then have the project name
then a button that leads to the page for the repo
then a button that goes to test the error boundary
we can use a timeout to delay the button from showing till the things type out. 

*/
