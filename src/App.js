import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./Components/firstPage";
import ApiWorks from "./Components/apiWorks";
import PageNotFound from "./Components/error404";
import ReadMore from "./Components/repoItemMore";

function App() {
  return (

    <section className="main-container">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/apiWorks" element={<ApiWorks />} />
        <Route path="/apiWorks/:id" element={<ReadMore />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </section>
  );
}

export default App;