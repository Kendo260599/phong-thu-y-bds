import React, { useState } from "react";
import InputForm from "./components/InputForm";
import ResultDisplay from "./components/ResultDisplay";

function App() {
  const [result, setResult] = useState(null);

  return (
    <div style={{ fontFamily: "serif", padding: "2rem", backgroundColor: "#f4e7ce" }}>
      <h1 style={{ color: "#8b0000", textAlign: "center" }}>PHONG THỦY LÊ GIA</h1>
      <InputForm onSubmit={setResult} />
      {result && <ResultDisplay result={result} />}
    </div>
  );
}

export default App;