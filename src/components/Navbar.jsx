import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { profile, nav } from "../data/portfolio";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="nav" aria-label="Main">
      <a href="#home" className="logo grad">{profile.initials} · Portfolio</a>
      <button className="burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </button>
      <ul className={open ? "open" : ""}>
        {nav.map((id) => <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)}>{id}</a></li>)}
      </ul>
    </nav>
  );
}
