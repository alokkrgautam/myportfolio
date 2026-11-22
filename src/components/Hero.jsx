import { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { profile } from "../data/portfolio";
import Social from "./Social";

// Photo is optional: drop profile.jpg / .png / .webp into src/assets (no code change needed).
const found = import.meta.glob("../assets/profile.{png,jpg,jpeg,webp}", { eager: true, import: "default" });
const photo = Object.values(found)[0];

const chips = [
  { label: "React", style: { top: "6%", left: "-14%", "--z": "90px" } },
  { label: "Node.js", style: { top: "24%", right: "-16%", "--z": "120px", animationDelay: ".6s" } },
  { label: "Python", style: { top: "58%", left: "-18%", "--z": "70px", animationDelay: "1.2s" } },
  { label: "AI / ML", style: { top: "76%", right: "-12%", "--z": "110px", animationDelay: "1.8s" } },
  { label: "MongoDB", style: { top: "-4%", right: "14%", "--z": "60px", animationDelay: "2.4s" } },
];

export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % profile.brand.length), 2200);
    return () => clearInterval(t);
  }, []);

  const mx = useMotionValue(0), my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 80, damping: 15 }), sy = useSpring(my, { stiffness: 80, damping: 15 });
  const rotateY = useTransform(sx, [-0.5, 0.5], [-16, 16]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [14, -14]);
  const track = (e) => { mx.set(e.clientX / window.innerWidth - 0.5); my.set(e.clientY / window.innerHeight - 0.5); };

  return (
    <section id="home" className="hero" onMouseMove={track}>
      <div className="aurora" aria-hidden="true"><span /><span /><span /></div>

      <motion.div initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
        <span className="pill"><i /> Open to opportunities</span>
        <h1>Hi, I'm <br /><span className="grad shine">{profile.name}</span></h1>
        <AnimatePresence mode="wait">
          <motion.p key={i} className="role" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
            {profile.brand[i]}
          </motion.p>
        </AnimatePresence>
        <p className="muted lead">{profile.intro}</p>
        <div className="btns">
          <a className="btn fill" href="#projects">View Projects</a>
          <a className="btn" href={profile.resume} download>Download Resume</a>
        </div>
        <Social />
      </motion.div>

      <div className="scene">
        <motion.div className="tcard" style={{ rotateX, rotateY }} initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }}>
          <div className="frame">
            <div className="inner">
              {photo ? <img src={photo} alt={`Portrait of ${profile.name}`} /> : <span className="grad">{profile.initials}</span>}
            </div>
          </div>
          {chips.map((c) => <span key={c.label} className="float" style={c.style}>{c.label}</span>)}
          <div className="nametag">
            <strong>{profile.name}</strong>
            <small>{profile.title}</small>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
