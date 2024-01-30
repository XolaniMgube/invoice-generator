import { User } from "./User";

const dashboardUsers = [
  {
    name: "Xolani Mgube",
    title: "Designer",
    status: "away",
    picture: "https://i.pravatar.cc/48?u=118836",
  },
  {
    name: "Momo Mgube",
    title: "Project Manager",
    status: "online",
    picture: "https://i.pravatar.cc/48?u=117736",
  },
  {
    name: "Mbali Nyembe",
    title: "Senior Manager",
    status: "offline",
    picture: "https://i.pravatar.cc/48?u=117436",
  },
  {
    name: "Mpilo Mgube",
    title: "Software Developer",
    status: "online",
    picture: "https://i.pravatar.cc/48?u=747436",
  },
  {
    name: "Njaubolo Mgube",
    title: "Software Developer",
    status: "online",
    picture: "https://i.pravatar.cc/48?u=747476"
  },
  {
    name: "Jabulile Mgube",
    title: "Software Developer",
    status: "away",
    picture: "https://i.pravatar.cc/48?u=742436"
  }
];

export function Users() {
  return (
    <div className="bg-white shadow-md px-3 pt-4 pb-1 rounded ">
      <div className="mb-4">
        <h5 className="mb-1">Active Users</h5>
        <p className="text-sm">All users active on your tasks</p>
      </div>
      {dashboardUsers.map((user) => (
        <User key={user.name} user={user} />
      ))}
        
      
    </div>
  );
}
