import { DashContainer } from "../Components/Dashboard/DashContainer";
import Nav from "../Components/Fragments/Nav";
import Sidebar from "../Components/Fragments/Sidebar";

export function Dashboard() {
  return (
    <div className="bg-simple-gradient">
      <Nav />
      <div className="flex">
        <Sidebar />
        <DashContainer />
      </div>
    </div>
  );
}
