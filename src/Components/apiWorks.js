import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RepoCards from "./repoCards";
import Pagination from "./pagination";
import "./apiWorks.css";

const ApiWorks = () => {
  // set state for each repo
  const [repo, setRepo] = useState([]);

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
  const currentRepo = repo?.slice(indexOfFirstRepo, indexOfLastRepo);

  //   Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="repoPageContainer">
      <section className="backButtonSection">
        <Link to="/">
          <button className="backButton">Go back</button>
        </Link>

        <Link to="/error404">
          <p className="errorLink">error404</p>
        </Link>
      </section>

      <section className="loadingSection">
        {repo?.length === 0 && <h1 className="loader">Loading...</h1>}
      </section>

      <section className="apiWorksHeader">
        {repo?.length >= 1 && <h2>List of my GitHub Repos</h2>}
      </section>

      <section className="repoCardsSection">
        <RepoCards repo={currentRepo} />
      </section>

      <section className="paginationSection">
        <Pagination
          repoPerPage={repoPerPage}
          totalRepo={repo?.length}
          paginate={paginate}
        />
      </section>
    </section>
  );
};

export default ApiWorks;
