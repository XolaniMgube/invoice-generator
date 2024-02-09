import { motion } from "framer-motion";
export function StatsCard({ background, value, text, children }) {
  return (
    <motion.div
      className={`${background} w-4/12 ms-3 rounded shadow-md hover:cursor-pointer`}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 },
      }}
    >
      <div className="p-3">
        {children}
        <h4>{value}</h4>
        <p className="text-sm font-bold text-sideBarText">{text}</p>
      </div>
    </motion.div>
  );
}
