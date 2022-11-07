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
        <button className="backButton">Go back</button>
      </Link>
      <div className="details-container">
        <h1 style={{ color: "white" }}>
          <span className="detail">Project Name:</span> {finalData[0].name}
        </h1>
        <h3 style={{ color: "white" }}>
          <span className="detail">Description:</span>{" "}
          {finalData[0].description}
        </h3>
        <h3 style={{ color: "white" }}>
          <span className="detail">Creator:</span> {finalData[0].owner.login}
        </h3>
        <h3 style={{ color: "white" }}>
          <span className="detail">Tech:</span> {finalData[0].language}
        </h3>
        <h3 style={{ color: "white" }}>
          <span className="detail">Link:</span> {finalData[0].archive_url}
        </h3>
      </div>
    </section>
  );
}

export default ReadMore;
