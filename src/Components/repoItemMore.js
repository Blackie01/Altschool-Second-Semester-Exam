import React from "react";
import { useParams } from "react-router-dom";
import "./repoItemMore.css";
import { Link } from "react-router-dom";

// component for the read more page

function ReadMore() {
  let { id } = useParams();

  const ReadMoreData = JSON.parse(localStorage.getItem("repoData"));
  const finalData = ReadMoreData?.filter((idf) => idf.id == id);
  console.log(finalData);

  return (
    <section className="readMorePage">
      <Link to="/apiWorks">
        <button className="readMoreBackButton">Go back</button>
      </Link>

      <div className="readMore-container">
        <h1 className="readMore-title">{finalData[0].name}</h1>
        <div className="details-container">
          <h3>
            <span className="detail">Description:</span> {finalData[0].description || "('_') oops. no info"}
          </h3>
          <h3>
            <span className="detail">Creator:</span> <a target="_blank" rel="noopener noreferrer" className="linkedIn" href={finalData[0].owner.html_url}>{finalData[0].owner.login}</a> 
          </h3>
          <h3>
            <span className="detail">Tech:</span> {finalData[0].language}
          </h3>
          <h3>
            <span className="detail">Link:</span> <a target="_blank" rel="noopener noreferrer" className="linkedIn" href={finalData[0].html_url}>Click Link</a> 
          </h3>
        </div>
      </div>
    </section>
  );
}

export default ReadMore;
