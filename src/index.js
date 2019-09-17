import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "./App.css";

const INIT_STATE = { agi: 0, cha: 0, con: 0, dex: 0, int: 0, str: 0, wis: 0 };

function Trait({ name, onInput }) {
  return (
    <div class="trait">
      <input type="text" onInput={onInput} />
      <h4>{name}</h4>
    </div>
  );
}

function Traits({ state, onInput }) {
  return (
    <div class="traits">
      <h1>Traits</h1>
      <Trait
        name="Agi"
        onInput={e => onInput({ agi: e.target.value, ...state })}
      />
      <Trait
        name="Cha"
        onInput={e => onInput({ cha: e.target.value, ...state })}
      />
      <Trait name="Con" onInput={onInput} />
      <Trait name="Dex" onInput={onInput} />
      <Trait name="Int" onInput={onInput} />
      <Trait name="Str" onInput={onInput} />
      <Trait name="Wis" onInput={onInput} />
    </div>
  );
}

function Skill({ name, trait1, trait2 }) {
  return (
    <>
      <tr>
        <td class="skill-name">{name}</td>
        <td class="skill-level">
          {trait1.name} + {trait2.name} = {trait1.value + trait2.value}
        </td>
        <td class="skill-specials">
          <input type="text" />
        </td>
      </tr>
    </>
  );
}

function App() {
  const [traits, setTraits] = useState(INIT_STATE);
  return (
    <div className="App">
      <Traits onInput={setTraits} state={traits} />
      <div class="skills">
        <h1>Skills</h1>
        <table>
          <tr class="skill-header">
            <th>Skill</th>
            <th>Level</th>
            <th>Specials</th>
          </tr>
          <Skill
            name="Academics"
            trait1={{ name: "Int", value: 5 }}
            trait2={{ name: "Int", value: 5 }}
          />
        </table>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
