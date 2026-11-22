import { motion } from "framer-motion";
import Tilt from "./Tilt";

// Scroll-reveal wrapper. If a className is given (e.g. "card") the content also gets the 3D tilt.
export default function Reveal({ children, delay = 0, className, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay }}
      {...props}
    >
      {className ? <Tilt className={className}>{children}</Tilt> : children}
    </motion.div>
  );
}
