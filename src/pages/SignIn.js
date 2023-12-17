import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const savedEmail = "xnmgube@gmail.com";
  const savedPassword = "password";

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    if (email === savedEmail && password === savedPassword) {
      setLogin(true);
    }
  };

  if (login) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="h-screen w-screen bg-active">
      <div className="h-screen flex justify-center border-2">
        <div className="bg-loginWhite w-1/4 h-3/4 my-auto rounded shadow-2xl">
          <div className=" my-20">
            <div className="my-12">
              <h1 className="text-center text-normalGrey font-bold">Login</h1>
            </div>
            <div className="flex justify-center mb-10">
              <form>
                <div className="mb-4 pb-2">
                  <input
                    className="border-b w-60 bg-loginWhite border-lightGrey focus:outline-none"
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    className="border-b w-60 bg-loginWhite border-lightGrey focus:outline-none font-lg"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="flex justify-center my-5">
                  <button
                    className="bg-active w-44 h-10 text-white rounded-2xl"
                    onClick={handleSubmitLogin}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
            <div className="flex justify-center mt-30">
              <p className="text-lightGrey text-xs italic">Forgot Password?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
