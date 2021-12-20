import { min as snippet } from "@segment/snippet";
import { useEffect } from "react";

function addScript(properties) {
  const script = document.createElement("script");
  Object.assign(script, properties);
  document.body.appendChild(script);
}

function addSegmentSnippet() {
  const contents = snippet({
    host: "cdn.segment.com",
    apiKey: process.env.REACT_APP_SEGMENT_KEY,
  });

  addScript({
    type: "text/javascript",
    innerText: contents,
  });
}

function App() {
  useEffect(() => {
    addSegmentSnippet();
  }, []);
  return (
    <div>
      <header>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
