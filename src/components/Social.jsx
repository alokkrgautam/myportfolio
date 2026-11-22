import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { profile } from "../data/portfolio";

export default function Social() {
  const items = [
    ["GitHub", profile.github, <FaGithub />],
    ["LinkedIn", profile.linkedin, <FaLinkedin />],
    ["LeetCode", profile.leetcode, <SiLeetcode />],
    ["Email", `mailto:${profile.email}`, <FaEnvelope />],
  ].filter(([, url]) => !url.includes("your"));
  return (
    <div className="social">
      {items.map(([name, url, icon]) => (
        <a key={name} href={url} aria-label={name} title={name} target="_blank" rel="noreferrer">{icon}</a>
      ))}
    </div>
  );
}
