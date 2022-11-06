import React from "react";
import './pagination.css';

function Pagination({ repoPerPage, totalRepo, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRepo / repoPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="page-links">
        {pageNumbers.map((number) => (
            <a className="pagination-anchor" onClick={() => paginate(number)} href="#">
                <li key={number}>
              {number}
              </li>
            </a>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
