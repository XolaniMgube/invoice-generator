import { Link } from "react-router-dom";
import { LuLayoutDashboard, LuSettings } from "react-icons/lu";
import { MdPendingActions, MdOutlineUpdate } from "react-icons/md";
import { AiOutlineFileDone } from "react-icons/ai";
import { TbLayoutList } from "react-icons/tb";

export default function Sidebar() {
  return (
    <div className="w-2/12 bg-white shadow-md h-screen text-sideBarText">
      <div className="">
        <ul className="sidebar-list p-0 m-0 ps-5 py-4 font-bold">
          <li className="flex items-center py-3">
            <LuLayoutDashboard size="20" className="text-iconBlue" />
            <Link
              to={"/dashboard"}
              className="text-sideBarText no-underline ps-3"
            >
              Dashboard
            </Link>
          </li>
          <li className="flex items-center py-3">
            <TbLayoutList size="20" className="text-iconBlue" />
            <Link
              to={"/dashboard"}
              className="text-sideBarText no-underline ps-3"
            >
              Task
            </Link>
          </li>
          <li className="flex items-center py-3">
          <MdPendingActions size="20" className="text-iconBlue" />
            <Link
              to={"/dashboard"}
              className="text-sideBarText no-underline ps-3"
            >
              Pending
            </Link>
          </li>
          <li className="flex items-center py-3">
          <AiOutlineFileDone size="20" className="text-iconBlue" />
            <Link
              to={"/dashboard"}
              className="text-sideBarText no-underline ps-3"
            >
              Complete
            </Link>
          </li>
          <li className="flex items-center py-3">
          <MdOutlineUpdate size="20" className="text-iconBlue" />
            <Link
              to="/update-invoice"
              className="no-underline text-sideBarText ps-3"
            >
              Update
            </Link>
          </li>
          <li className="flex items-center py-3">
          <LuSettings size="20" className="text-iconBlue" />
            <Link
              to={"/gen-settings"}
              className="no-underline text-sideBarText ps-3"
            >
              Settings
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
