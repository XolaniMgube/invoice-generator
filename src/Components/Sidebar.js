import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-3/12 bg-darkGrey h-screen text-sideBarText">
      <div className="py-3 flex justify-center border-b">
        <h3 className="text-lg">Invoice Calculator</h3>
      </div>
      <div className="flex ps-2 py-3 my-auto">
        <div className="my-auto">
          <img width={25} src="./profile.png" alt="profile" />
        </div>
        <div className="ps-2">
          <p className="my-auto">Xolani Mgube</p>
        </div>
      </div>
      <div className="">
        <ul className="sidebar-list p-0 m-0">
          <li className="py-1 bg-active">
            <Link
              to={"/dashboard"}
              className="ps-2 pe-28 py-3 hover:text-darkGrey text-darkGrey no-underline block"
            >
              Generate Invoice
            </Link>
          </li>
          <li className="py-1 hover:bg-active">
            <Link
              to="/update-invoice"
              className="ps-2 pe-28 py-3 hover:text-darkGrey no-underline text-sideBarText block"
            >
              Update Invoice
            </Link>
          </li>
          <li className="py-1 hover:bg-active">
            <Link
              to={"/gen-settings"}
              className="ps-2 pe-28 py-3 hover:text-darkGrey no-underline text-sideBarText block"
            >
              Settings
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
