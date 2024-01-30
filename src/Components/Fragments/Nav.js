import { TiArrowSortedDown } from "react-icons/ti";
import { IoMdNotificationsOutline } from "react-icons/io";

export default function Nav() {
  return (
    <div className="flex w-full h-12 bg-white drop-shadow-md">
      <div className="w-1/2">
        <div className="flex mx-3 my-1">
          <div className="my-auto me-3">
            <img width="30" src="./logo.png" alt="" />
          </div>
          <div className="my-1">
            <span className="text-lg font-bold">Invoice Generator</span>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <div className="flex justify-end items-center mx-4">
          <IoMdNotificationsOutline size="20" color="red" className="me-2" />
          <p className="my-auto font-bold text-sm mx-2">Xolani Mgube</p>
          <img width="45" src="./my-pic.png" alt="" />
          <TiArrowSortedDown />
        </div>
      </div>
    </div>
  );
}
