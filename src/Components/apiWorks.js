import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import RepoCards from "./repoCards";
import Pagination from "./pagination";
import './apiWorks.css';


const ApiWorks = () => {
  // set state for each repo
  const [repo, setRepo] = useState([]);

  // set state for the pages
  const [repoPages, setRepoPages] = useState(1);

  // states for paginatoin
  const [currentPage, setCurrentPage] = useState(1);
  const [repoPerPage] = useState(4);

  const ReusableAPI = () => {
    fetch("https://api.github.com/users/Blackie01/repos")
      .then((response) => response.json())
      .then((json) => setRepo(json));
  };

  //API call with useEffect
  useEffect(() => {
    ReusableAPI();
  }, []);

  // display data in console
  console.log(repo);

  const indexOfLastRepo = currentPage * repoPerPage;
  const indexOfFirstRepo = indexOfLastRepo - repoPerPage;
  const currentRepo = repo.slice(indexOfFirstRepo, indexOfLastRepo);

  //   Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="repoPageContainer">
      <Link to="/">
        <button className="backButton">Go back</button>
      </Link>
      {repo.length === 0 && <h1 className="loader">Loading...</h1>}
      <RepoCards repo={currentRepo} />
      <Pagination
        repoPerPage={repoPerPage}
        totalRepo={repo.length}
        paginate={paginate}
      />
    </section>
  );
};

export default ApiWorks;
