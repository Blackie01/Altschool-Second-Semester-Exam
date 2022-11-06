import React, { useState, useEffect } from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import "./App.css";
import LandingPage from "./Components/firstPage";
import ApiWorks from "./Components/apiWorks";
import ShowEmpty from "./Components/repoItemMore";
import PageNotFound from "./Components/error404";

function App() {
  return (
    <section className="main-container">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/apiWorks" element={<ApiWorks />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </section>
  );
}

export default App;

/*
Implement an API fetch of your GitHub portfolio, (done)
show a page with a list of all your repositories on GitHub (done)
(the page should implement pagination for the repo list), (done)
and create another page showing data for a single repo clicked from the list of repos using nested routes 
while using all the necessary tools in react. 
Implement the proper SEO, 
Error Boundary (show a page to test the error boundary) 
and 404 pages. (done)

Good UI and Designs are important. 


consume api: https://www.youtube.com/watch?v=ALdtGsyTh2E
pagination: https://www.youtube.com/watch?v=IYCa1F-OWmk


pass your map as a prop to the component of the new page
receive it as a prop. 
pass repo as a prop and destructure


dot anotation.
*/
