import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleRespone(response) {
    console.log(response.data);

    setResults(response.data);
  }

  function Search(event) {
    event.preventDefault();

    let apiKey = "95aba4bfo096ef39t52469746eae7704";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleRespone);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={Search}>
        <input
          type="search"
          placeholder="What is the meaning of?"
          onChange={handleKeywordChange}
        />
        <input type="submit" />
      </form>
      <Results results={results} />
    </div>
  );
}
