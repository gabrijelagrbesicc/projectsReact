import { useEffect, useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(() => {
    const spremljeniTaskovi = localStorage.getItem("tasks");
    return spremljeniTaskovi ? JSON.parse(spremljeniTaskovi) : [];
  });
  const [filter, setFilter] = useState("sve");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const dodajTask = () => {
    if (task.trim() === "") return;

    const noviTask = {
      id: Date.now(),
      text: task,
      done: false,
    };

    setTasks([...tasks, noviTask]);
    setTask("");
  };

  const obrisiTask = (idZaBrisanje) => {
    setTasks(tasks.filter((t) => t.id !== idZaBrisanje));
  };

  const toggleTask = (idZaPromjenu) => {
    setTasks(
      tasks.map((t) =>
        t.id === idZaPromjenu ? { ...t, done: !t.done } : t
      )
    );
  };

  const obrisiSve = () => {
    setTasks([]);
  };

  const filtriraniTaskovi = tasks.filter((t) => {
    if (filter === "aktivni") return !t.done;
    if (filter === "zavrseni") return t.done;
    return true;
  });

  return (
    <div style={{ maxWidth: "500px", margin: "40px auto", fontFamily: "Arial" }}>
      <h1>Todo lista</h1>

      <input
        type="text"
        placeholder="Upiši zadatak"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") dodajTask();
        }}
        style={{ padding: "8px", width: "70%", marginRight: "10px" }}
      />

      <button onClick={dodajTask}>Dodaj</button>

      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <button onClick={() => setFilter("sve")}>Sve</button>
        <button onClick={() => setFilter("aktivni")} style={{ marginLeft: "10px" }}>
          Aktivni
        </button>
        <button onClick={() => setFilter("zavrseni")} style={{ marginLeft: "10px" }}>
          Završeni
        </button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {filtriraniTaskovi.map((t) => (
          <li
            key={t.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "10px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "8px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <input
                type="checkbox"
                checked={t.done}
                onChange={() => toggleTask(t.id)}
              />

              <span
                style={{
                  textDecoration: t.done ? "line-through" : "none",
                  color: t.done ? "gray" : "black",
                }}
              >
                {t.text}
              </span>
            </div>

            <button onClick={() => obrisiTask(t.id)}>Obriši</button>
          </li>
        ))}
      </ul>

      <p>Ukupno zadataka: {tasks.length}</p>
      <p>Završenih: {tasks.filter((t) => t.done).length}</p>
      <p>Aktivnih: {tasks.filter((t) => !t.done).length}</p>

      <button onClick={obrisiSve} style={{ marginTop: "15px" }}>
        Obriši sve
      </button>
    </div>
  );
}

export default App;