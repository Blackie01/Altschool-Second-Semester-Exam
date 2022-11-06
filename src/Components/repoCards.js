import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./repoCards.css";

function RepoCards({ repo, repoPages }) {
  return (
    <section>
      <div className="card-container">
        {repo.map((repository, i) => (
          <div className="repoCardBullets" key={i}>
            {repository.full_name}
          </div>
        ))}
      </div>
    </section>
  );
}

export default RepoCards;
