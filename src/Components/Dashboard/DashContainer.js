import { StatsCard } from "./StatsCard";
import { MdOutlinePeopleAlt, MdOutlineFreeCancellation } from "react-icons/md";
import { VscFolderActive } from "react-icons/vsc";
import { StatsGraph } from "./StatsGraph";
import { Users } from "./Users";

export function DashContainer() {
  return (
    <>
      <div className="w-7/12 ">
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
      </div>
      <div className="w-3/12 mt-12 mx-3">
        <Users />
      </div>
    </>
  );
}
