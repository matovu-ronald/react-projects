import React, { useState } from "react";
import { FaCopy } from "react-icons/fa";
import data from "./data";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [paragraphs, setParagraphs] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (amount <= 0) {
      amount = 1;
    }

    if (amount > 8) {
      amount = 8;
    }
    setParagraphs(data.slice(0, amount));
  };

  const copyParagraphs = () => {
    navigator.clipboard.writeText(paragraphs);
  };

  return (
    <section className="section-center">
      <h3>New way for generating lorem ipsum</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="paragraph">Paragraphs:</label>
        <input
          name="paragraph"
          id="paragraph"
          onChange={(e) => setCount(e.target.value)}
          value={count}
          type="number"
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {paragraphs.length > 0 && (
          <div className="copy" onClick={copyParagraphs}>
            <FaCopy />
          </div>
        )}
        {paragraphs.map((paragraph, index) => {
          return <p key={index}>{paragraph}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
