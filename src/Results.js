import React from "react";
import Meaning from "./Meaning.js";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <div className="section-wrap">
          <section>
            <h1>{props.results.word}</h1>
            <h2>{props.results.phonetic}</h2>
          </section>
        </div>

        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
