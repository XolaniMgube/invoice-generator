// import { formToJSON } from 'axios'
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import Task from "./pages/Task";
import SignIn from "./pages/SignIn";
import { Update } from "./pages/Update";
import Settings from "./pages/Settings";
import { Pending } from "./pages/Pending";
import { Complete } from "./pages/Complete";
import { useState } from "react";
import { users } from "./data/users";
import Nav from "./Components/Fragments/Nav";
import Sidebar from "./Components/Fragments/Sidebar";

export default function App() {
  const [correctUser, setCorrectUser] = useState({});

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <SignIn
              users={users}
              correctUser={correctUser}
              setCorrectUser={setCorrectUser}
            />
          }
        ></Route>
      </Routes>
      <div className="bg-simple-gradient">
        <Nav correctUser={correctUser} setCorrectUser={setCorrectUser} />
        <div className="flex">
          <Sidebar />
          <Routes>
            <Route
              path="/dashboard"
              element={<Dashboard />}
            ></Route>
            <Route path="/task" element={<Task />}></Route>
            <Route path="/update" element={<Update />}></Route>
            <Route path="/settings" element={<Settings />}></Route>
            <Route path="/pending" element={<Pending />}></Route>
            <Route path="/complete" element={<Complete />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}
