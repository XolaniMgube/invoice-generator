import { NavLink } from "react-router-dom";
import { LuLayoutDashboard, LuSettings } from "react-icons/lu";
import { MdPendingActions, MdOutlineUpdate } from "react-icons/md";
import { AiOutlineFileDone } from "react-icons/ai";
import { TbLayoutList } from "react-icons/tb";
import styles from '../Assets/Sidebar.module.css'

export default function Sidebar() {
  return (
    <div className="w-2/12 bg-white shadow-md h-screen text-sideBarText">
      <div className="">
        <ul className={`${styles.nav} sidebar-list p-0 m-0 ps-5 py-4 font-bold`}>
          <li className="flex items-center py-3">
            <LuLayoutDashboard size="20" className="text-iconBlue" />
            <NavLink
              to={"/dashboard"}
              className="text-sideBarText no-underline ps-3"
            >
              Dashboard
            </NavLink>
          </li>
          <li className="flex items-center py-3">
            <TbLayoutList size="20" className="text-iconBlue" />
            <NavLink
              to={"/task"}
              className="text-sideBarText no-underline ps-3"
            >
              Task
            </NavLink>
          </li>
          <li className="flex items-center py-3">
          <MdPendingActions size="20" className="text-iconBlue" />
            <NavLink
              to={"/pending"}
              className="text-sideBarText no-underline ps-3"
            >
              Pending
            </NavLink>
          </li>
          <li className="flex items-center py-3">
          <AiOutlineFileDone size="20" className="text-iconBlue" />
            <NavLink
              to={"/complete"}
              className="text-sideBarText no-underline ps-3"
            >
              Complete
            </NavLink>
          </li>
          <li className="flex items-center py-3">
          <MdOutlineUpdate size="20" className="text-iconBlue" />
            <NavLink
              to="/update"
              className="no-underline text-sideBarText ps-3"
            >
              Update
            </NavLink>
          </li>
          <li className="flex items-center py-3">
          <LuSettings size="20" className="text-iconBlue" />
            <NavLink
              to={"/settings"}
              className="no-underline text-sideBarText ps-3"
            >
              Settings
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
