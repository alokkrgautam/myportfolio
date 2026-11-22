import Reveal from "./Reveal";
import { profile } from "../data/portfolio";

export default function About() {
  const rows = [["Name", profile.name], ["Role", profile.role], ["Education", profile.education], ["Career Objective", profile.objective]];
  return (
    <section id="about">
      <Reveal><h2>About Me</h2><p className="about">{profile.summary}</p></Reveal>
      <div className="grid">
        {rows.map(([k, v], i) => (
          <Reveal key={k} delay={i * 0.07} className="card"><h3>{k}</h3><p className="muted">{v}</p></Reveal>
        ))}
      </div>
    </section>
  );
}
