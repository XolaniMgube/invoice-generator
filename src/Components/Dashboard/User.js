import { FaLinkedin } from "react-icons/fa6";
import { motion } from "framer-motion"
export function User({ user }) {
  return (
    <div className="hover:cursor-pointer">
      <div className="flex items-center border-bottom mx-1 my-3">
        <motion.div className="flex items-center pb-3 w-full"
         whileHover={{
          scale: 1.1,
          transition: { duration: 0.2 },
        }}>
          <div className="rounded">
            <img
              className={`rounded-full border-2 ${
                user.status === "online" ? "border-green" : "border-orange"
              }`}
              src={user.picture}
              alt=""
            />
          </div>
          <div className="ms-2">
            <p className="mb-0 text-xs font-bold">{user.name}</p>
            <p className="mb-0 text-xs">{user.title}</p>
            <p className="mb-0 text-xs">{user.status}</p>
          </div>
        </motion.div>
        <div className="me-4">
          <a href="https://www.linkedin.com/in/xolani-mgube-b50974185/">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}
