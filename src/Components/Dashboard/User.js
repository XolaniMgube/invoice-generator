import { FaLinkedin } from "react-icons/fa6";
export function User({ user }) {
  return (
    <div className="">
      <div className="flex items-center border-bottom mx-1 my-3">
        <div className="flex items-center pb-3 w-full">
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
        </div>
        <div className="me-4">
          <FaLinkedin />
        </div>
      </div>
    </div>
  );
}
