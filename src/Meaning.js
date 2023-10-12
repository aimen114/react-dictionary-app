import React from "react";
import Synonyms from "./Synonyms.js";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <div className="section-wrap">
        <section>
          <h2 className="text-capitalize">{props.meaning.partOfSpeech}</h2>
          <p>{props.meaning.definition}</p>
          <em>{props.meaning.example}</em>
          <Synonyms synonyms={props.meaning.synonyms} />
        </section>
      </div>
    </div>
  );
}
