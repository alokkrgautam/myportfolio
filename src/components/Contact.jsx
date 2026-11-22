import { useState } from "react";
import Reveal from "./Reveal";
import { profile } from "../data/portfolio";

export default function Contact() {
  const [f, setF] = useState({ name: "", email: "", message: "" });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const send = (e) => {
    e.preventDefault(); // no backend: opens the visitor's email app with the message filled in
    const body = `${f.message}\n\nFrom: ${f.name} (${f.email})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent("Portfolio message from " + f.name)}&body=${encodeURIComponent(body)}`;
  };
  const info = [["Email", profile.email, `mailto:${profile.email}`], ["GitHub", profile.github, profile.github],
    ["LinkedIn", profile.linkedin, profile.linkedin], ["Location", profile.location, ""]]
    .filter(([, v]) => v && !v.includes("your"));
  return (
    <section id="contact" className="contact">
      <Reveal><h2>Contact</h2><p className="about">Open to internships, collaborations and interesting problems.</p></Reveal>
      <div className="cols">
        <form className="card" onSubmit={send}>
          <label>Name<input required value={f.name} onChange={set("name")} autoComplete="name" /></label>
          <label>Email<input required type="email" value={f.email} onChange={set("email")} autoComplete="email" /></label>
          <label>Message<textarea required rows="5" value={f.message} onChange={set("message")} /></label>
          <button className="btn fill" type="submit">Send Message</button>
        </form>
        <div className="card info">
          {info.map(([k, v, url]) => (
            <p key={k}><strong>{k}</strong><br />{url ? <a href={url} target="_blank" rel="noreferrer">{v}</a> : v}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
