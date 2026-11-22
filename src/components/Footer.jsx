import { profile } from "../data/portfolio";
import Social from "./Social";

export default function Footer() {
  return (
    <footer>
      <Social />
      <p>© {new Date().getFullYear()} {profile.name} · Built with React</p>
    </footer>
  );
}
