import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Traits from "./components/Traits";
import Skills from "./components/Skills";
import CharacterInfo from "./components/CharacterInfo/index";

const INIT_STATE = { agi: 0, cha: 0, con: 0, dex: 0, int: 0, str: 0, wis: 0 };

function Skl(ln, t1, t2) {
  this.longName = ln;
  this.trait1 = t1;
  this.trait2 = t2;
}

const SKILLS = [
  new Skl("Academics", "int", "int"),
  new Skl("Investigation", "int", "wis"),
  new Skl("Magic", "int", "wis"),
  new Skl("Perception", "int", "wis"),
  new Skl("Survival", "con", "int"),
  new Skl("Thievery", "dex", "int"),
  new Skl("Athletics", "agi", "con"),
  new Skl("Fighting (Hvy)", "agi", "str"),
  new Skl("Fighting (Lgt)", "agi", "dex"),
  new Skl("Physique", "con", "str"),
  new Skl("Stealth", "agi", "wis"),
  new Skl("Contacts", "cha", "int"),
  new Skl("Insight", "cha", "wis"),
  new Skl("Nursing", "con", "wis"),
  new Skl("Persuasion", "cha", "cha"),
  new Skl("Crafting", "dex", "int"),
  new Skl("Shooting", "agi", "dex"),
  new Skl("Vehicle (Air)", "dex", "int"),
  new Skl("Vehicle (Land)", "dex", "wis"),
  new Skl("Vehicle (Sea)", "dex", "int")
];

function App() {
  const [traits, setTraits] = useState(INIT_STATE);
  return (
    <>
      <CharacterInfo />
      <Traits onInput={setTraits} state={traits} />
      <Skills state={traits} skills={SKILLS} />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
