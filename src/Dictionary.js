import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("Sunset");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleRespone(response) {
    console.log(response.data);

    setResults(response.data);
  }
  function handleSubmit(event) {
    event.preventDefault();
    Search();
  }
  function Loaded() {
    setLoaded(true);
    Search();
  }

  function Search(event) {
    let apiKey = "95aba4bfo096ef39t52469746eae7704";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleRespone);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  if (loaded) {
    return (
      <div className="Dictionary m-5">
        <div className="section-wrap">
          <section className="search-section ">
            <form onSubmit={handleSubmit}>
              <input
                className="form-control m-2"
                type="search"
                placeholder="What is the meaning of?"
                onChange={handleKeywordChange}
              />
              <input
                type="submit"
                value="Search"
                className="btn btn-outline-secondary m-2"
              />
            </form>
          </section>
        </div>

        <Results results={results} />
      </div>
    );
  } else {
    Loaded();
    return "Loading...";
  }
}
