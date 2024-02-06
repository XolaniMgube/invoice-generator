import { StatsCard } from "./StatsCard";
import { MdOutlinePeopleAlt, MdOutlineFreeCancellation } from "react-icons/md";
import { VscFolderActive } from "react-icons/vsc";
import { StatsGraph } from "./StatsGraph";
import { Users } from "./Users";
import { motion } from "framer-motion";

export function DashContainer() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0.5, 0.71, 0.2, 1.01],
        }}
        className="w-7/12 "
      >
        <div className="flex justify-between mt-12">
          <StatsCard
            background="bg-cardLightRed"
            value={583}
            text="Total Clients"
          >
            <MdOutlinePeopleAlt size="30" className="text-logoBlueThree" />
          </StatsCard>
          <StatsCard
            background="bg-cardLightYellow"
            value={28}
            text="Cancelled Invoices"
          >
            <MdOutlineFreeCancellation
              size={30}
              className="text-logoBlueThree"
            />
          </StatsCard>
          <StatsCard
            background="bg-cardLightGreen"
            value={16}
            text="Active Invoices"
          >
            <VscFolderActive size="30" className="text-logoBlueThree" />
          </StatsCard>
        </div>
        <div>
          <StatsGraph />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0.5, 0.71, 0.2, 1.01],
        }}
        className="w-3/12 mt-12 mx-3"
      >
        <Users />
      </motion.div>
    </>
  );
}
