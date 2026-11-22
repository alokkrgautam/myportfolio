import Reveal from "./Reveal";
import { skills } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills">
      <Reveal><h2>Skills</h2></Reveal>
      <div className="grid">
        {Object.entries(skills).map(([group, items], i) => (
          <Reveal key={group} delay={i * 0.08} className="card">
            <h3>{group}</h3>
            <div className="chips">{items.map((s) => <span className="chip" key={s}>{s}</span>)}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
