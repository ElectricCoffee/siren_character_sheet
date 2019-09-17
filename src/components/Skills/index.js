import React from "react";
import "./Skills.css";

function Skill({ name, trait1, trait2 }) {
  return (
    <tr>
      <td className="skill-name">{name}</td>
      <td className="skill-level">
        <span>{trait1.name}</span> + <span>{trait2.name}</span> = {trait1.value + trait2.value}
      </td>
      <td className="skill-specials">
        <input type="text" />
      </td>
    </tr>
  );
}

export default function Skills({ state, skills }) {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <table>
        <thead>
          <tr className="skill-header">
            <th>Skill</th>
            <th>Level</th>
            <th>Specials</th>
          </tr>
        </thead>
        <tbody>
          {skills.map(({ longName, trait1, trait2 }) => (
            <Skill
              key={longName}
              name={longName}
              trait1={{ name: trait1, value: state[trait1] }}
              trait2={{ name: trait2, value: state[trait2] }}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
