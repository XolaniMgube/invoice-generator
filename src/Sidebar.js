export default function Sidebar() {
  return (
    <div className="w-3/12 bg-darkGrey h-screen text-sideBarText">
      <div className="py-3 ">
        <h3 className="px-2">Invoice Calculator</h3>
      </div>
      <div className="flex items-center my-2 px-4">
        <img
          width={30}
          src="./profile-picture2.png"
          alt="profile picture"
        />
        <div className="flex items-center">
          <p className="">Xolani Mgube</p>
        </div>
      </div>
      <div className="mt-10">
        <ul className="p-0 m-0">
          <li className="py-3 bg-active"><a className="px-2 text-darkGrey no-underline">Generate Invoice</a></li>
          <li className="py-3"><a className="px-2 no-underline text-sideBarText">Update Invoice</a></li>
          <li className="py-3"><a className="px-2 no-underline text-sideBarText">Settings</a></li>
        </ul>
      </div>
    </div>
  );
}
