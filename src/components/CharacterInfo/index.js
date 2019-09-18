import React from "react";
import "./CharacterInfo.scss";

function InfoField({ name, type = "text" }) {
  return (
    <div className="info-field">
      <label>{name}</label>
      <input type={type} />
    </div>
  );
}

export default function CharacterInfo() {
  return (
    <header>
      <InfoField name="Character Name" />
      <InfoField name="Player name" />
      <InfoField name="Height" type="number" />
      <InfoField name="Weight" type="number" />
      <InfoField name="Age" type="number" />
      <InfoField name="Appearance" />
      <InfoField name="XP" type="number" />
    </header>
  );
}
