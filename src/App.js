import Dictionary from "./Dictionary";

import "./App.css";

export default function App() {
  return (
    <div className="App container">
      <main>
        <Dictionary />
      </main>
      <footer className="mb-3 text-center">
        This project is created by{" "}
        <a
          href="https://unrivaled-gingersnap-27115c.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Aimen Zafar
        </a>
        , Open sourced on{" "}
        <a
          href="https://github.com/aimen114/react-dictionary-app.git"
          target="_blank"
          rel="noreferrer"
        >
          Github{" "}
        </a>
        and hosted on{" "}
        <a
          href="https://quiet-pie-363727.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify.
        </a>
      </footer>
    </div>
  );
}
