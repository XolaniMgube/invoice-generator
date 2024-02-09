import { TiArrowSortedDown } from "react-icons/ti";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineLogout } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function Nav({ correctUser, setCorrectUser }) {

  const [showLogout, setShowLogout] = useState(false)
  const navigate = useNavigate();

  const toggleLogoutBtn = (e) => {
    e.preventDefault();
    setShowLogout(!showLogout);
  }

  const handleLogout = (e) => {
    e.preventDefault();
    navigate("/")
    setCorrectUser({});
    setShowLogout(false)
  }

  return (
    <>
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
            <button className="hover:cursor-pointer flex items-center" onClick={toggleLogoutBtn}>
              <p className="my-auto font-bold text-sm mx-2">
                {correctUser[0]?.name}
              </p>
              <img
                width="45"
                className="rounded-full border-2 border-white"
                src={correctUser[0]?.picture}
                alt=""
              />
              <TiArrowSortedDown />
            </button>
          </div>
        </div>
      </div>
      {showLogout ? (
        <div className="w-2/12 bg-white absolute top-12 right-0 rounded shadow-lg p-3">
        <button className="flex items-center mx-3" onClick={handleLogout}>
          <MdOutlineLogout />
          <p className="my-0 mx-2">Logout</p>
        </button>
      </div>
      ): null}
      
    </>
  );
}
