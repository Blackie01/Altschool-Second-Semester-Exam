import React from "react";
import { Link } from "react-router-dom";
import "./repoCards.css";

// this is my RepoCards component file to display the items on previous page

function RepoCards({ repo, repoPages }) {
  localStorage.setItem("repoData", JSON.stringify(repo));

  return (
    <section>
      <div className="card-container">
        {repo.map((repository, i) => (
          <Link to={`/apiWorks/${repository.id}`}>
            <div className="repoCardBullets" key={i}>
              {repository.name}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default RepoCards;
