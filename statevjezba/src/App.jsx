import { useState } from "react";

/*function App() {
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
}*/

function App(){
  const [ime, setIme] = useState("");

  return(
    <div>
      <h1>Unos imena</h1>

      <input type="text"
      placeholder="Unesi ime"
      value={ime}
      onChange={(e) => setIme(e.target.value)}
      />

      <p>Bok, {ime}</p>

    </div>
  );
}

export default App;