import { useState } from "react";
import s from "./App.module.css";

function App() {
  const [estado, setEstado] = useState("pendiente");
  const [result, setResult] = useState(0);
  const [input, setInput] = useState({
    anchoTecho: 0,
    largoTecho: 0,
    anchoPanel: 0,
    largoPanel: 0,
  });

  const calculate = (at, lt, ap, lp) => {
    const minT = at > lt ? lt : at;
    if (at == 0 || lt == 0 || ap == 0 || lp == 0) {
      return 0;
    }
    if (ap > minT && lp > minT) {
      return 0;
    } else {
      return Math.floor((at * lt) / (ap * lp));
    }
  };

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.id]: e.target.value,
    });
  };

  const handleSumit = (e) => {
    e.preventDefault();

    setResult(
      calculate(
        input.anchoTecho,
        input.largoTecho,
        input.anchoPanel,
        input.largoPanel
      )
    );
    setEstado("resuelto");
  };

  return (
    <>
      <main>
        <h1>Prueba tecnica Ruuf - paneles Solares</h1>
        <p>
          Programa que consiste en calcular la cantidad maxima de paneles
          solares que caben en una superfice (techo).
        </p>
        <form className={s.form} onSubmit={(e) => handleSumit(e)}>
          <div className={s.space}>
            <p>Dimensiones del techo en metros</p>
            <input
              type="number"
              min={1}
              id="largoTecho"
              placeholder="Largo del techo"
              className={s.input}
              onChange={handleChange}
            />
            <input
              type="number"
              min={1}
              id="anchoTecho"
              placeholder="Ancho del techo"
              className={s.input}
              onChange={handleChange}
            />
          </div>
          <div className={s.space}>
            <p>Dimensiones del Panel Solar en metros</p>
            <input
              type="number"
              min={1}
              id="largoPanel"
              placeholder="Largo del Panel"
              className={s.input}
              onChange={handleChange}
            />
            <input
              type="number"
              min={1}
              id="anchoPanel"
              placeholder="Ancho del Panel"
              className={s.input}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Calcular</button>
        </form>
        {estado == "resuelto" && (
          <div>
            <p className={s.result}>
              La cantidad de paneles que caben en el techo es de{" "}
              <strong className={s.decorate}>{result}</strong>
            </p>
          </div>
        )}
      </main>
    </>
  );
}

export default App;
