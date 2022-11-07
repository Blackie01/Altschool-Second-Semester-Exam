import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./repoCards.css";

// this is my RepoCards component file to display the items on previous page

function RepoCards({ repo, repoPages }) {
    localStorage.setItem('repoData', JSON.stringify(repo))
    

  return (
    <section>
      <div className="card-container">
        {repo.map((repository, i) => (
          <div className="repoCardBullets" key={i}>
            <Link to={`/apiWorks/${repository.id}`}>
            {repository.full_name}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RepoCards;
