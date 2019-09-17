import React from "react";
import "./Traits.css";

function Trait({ name, onUpdate, init = 0 }) {
  return (
    <div className="trait">
      <span>{name} </span>
      <input
        type="number"
        min="0"
        onInput={e => onUpdate(Number(e.target.value))}
        defaultValue={init}
      />
    </div>
  );
}

export default function Traits({ state, onInput }) {
  return (
    <div className="traits">
      <h1>Traits</h1>
      {Object.entries(state).map(([k, _]) => (
        <Trait key={k} name={k} onUpdate={val => onInput({ ...state, [k]: val })} />
      ))}
    </div>
  );
}
