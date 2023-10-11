import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Results">
        {props.synonyms.map(function (syno, index) {
          return (
            <div key={index}>
              <li>{syno}</li>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
