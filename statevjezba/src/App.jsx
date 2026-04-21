import { useState } from "react";

function App() {
  const [broj, setBroj] = useState(0);

  return (
    <div>
      <h1>Brojač</h1>
      <p>Trenutni broj: {broj}</p>

      <button onClick={() => setBroj(broj + 1)}>
        Povećaj
      </button>

      <button onClick={() => setBroj(broj - 1)}>
        Smanji
      </button>
    </div>
  );
}

export default App;