import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import Tilt from "./Tilt";
import { projects } from "../data/portfolio";

const cats = ["All", "AI Projects", "Machine Learning Projects", "Web Development", "Full Stack"];

export default function Projects() {
  const [cat, setCat] = useState("All");
  const shown = projects.filter((p) => cat === "All" || p.category === cat);
  const used = cats.filter((c) => c === "All" || projects.some((p) => p.category === c));
  return (
    <section id="projects">
      <Reveal><h2>Projects</h2></Reveal>
      <div className="chips filters">
        {used.map((c) => (
          <button key={c} className={`chip ${c === cat ? "on" : ""}`} onClick={() => setCat(c)}>{c}</button>
        ))}
      </div>
      <div className="grid">
        {shown.map((p) => (
          <motion.article layout key={p.title}>
            <Tilt className="card project">
              {p.image
                ? <img className="thumb" src={p.image} alt={`${p.title} screenshot`} loading="lazy" />
                : <div className="thumb ph" role="img" aria-label={`${p.title} preview`}>{p.title[0]}</div>}
              <h3>{p.title}</h3>
              <p className="muted">{p.text}</p>
              <div className="chips">{p.stack.map((s) => <span className="chip" key={s}>{s}</span>)}</div>
              <div className="links">
                {p.github && !p.github.includes("your") && <a href={p.github} target="_blank" rel="noreferrer">GitHub ↗</a>}
                {p.demo && <a href={p.demo} target="_blank" rel="noreferrer">Live Demo ↗</a>}
              </div>
            </Tilt>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
