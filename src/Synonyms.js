import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms mt-3">
        {props.synonyms.map(function (syno, index) {
          return (
            <span key={index} className="syno">
              <div className="synonym ">{syno}</div>
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
