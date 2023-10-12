import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("pink");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleRespone(response) {
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
  function handlePhotoSearch(response) {
    setPhotos(response.data.photos);
  }

  function Search(event) {
    let apiKey = "95aba4bfo096ef39t52469746eae7704";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleRespone);
    let photosUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;
    axios.get(photosUrl).then(handlePhotoSearch);
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    Loaded();
    return "Loading...";
  }
}
