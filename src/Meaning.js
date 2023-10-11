import React from "react";
import Synonyms from "./Synonyms.js";

export default function Meaning(props) {
  console.log(props.meaning.definition);
  return (
    <div className="Meaning">
      <h2>{props.meaning.partOfSpeech}</h2>
      <p>{props.meaning.definition}</p>
      <em>{props.meaning.example}</em>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
