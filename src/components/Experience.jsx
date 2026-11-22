import Reveal from "./Reveal";
import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience">
      <Reveal><h2>Experience</h2></Reveal>
      <div className="timeline">
        {experience.map((e) => (
          <Reveal key={e.position}>
            {e.duration && <span className="chip">{e.duration}</span>}
            <h3>{e.position}</h3>
            {e.org && <p className="org">{e.org}</p>}
            <ul className="muted">{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
