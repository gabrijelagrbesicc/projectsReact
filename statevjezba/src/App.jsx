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
/*
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
}*/

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // dodavanje zadatka
  const dodajTask = () => {
    if (task === "") return;

    setTasks([...tasks, task]);
    setTask("");
  };

  // brisanje zadatka
  const obrisiTask = (indexZaBrisanje) => {
    setTasks(tasks.filter((_, i) => i !== indexZaBrisanje));
  };

  return (
    <div>
      <h1>Todo lista</h1>

      <input
        type="text"
        placeholder="Upiši zadatak"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={dodajTask}>Dodaj</button>

      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t}
            <button onClick={() => obrisiTask(index)}>
              Obriši
            </button>
          </li>
        ))}
      </ul>

      <p>Ukupno zadataka: {tasks.length}</p>
    </div>
  );
}

export default App;