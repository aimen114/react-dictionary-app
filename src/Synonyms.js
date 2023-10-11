import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Results">
        <h4>Synonyms:</h4>
        {props.synonyms.map(function (syno, index) {
          return (
            <div key={index}>
              <ul>
                <li>{syno}</li>
              </ul>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
