import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { IoEye, IoEyeOff } from "react-icons/io5";
import BarLoader from "react-spinners/BarLoader";
import {motion} from "framer-motion";

export default function SignIn({ users, correctUser, setCorrectUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [usernameMatch, setUsernameMatch] = useState("");
  const [passwordMatch, setPasswordMatch] = useState("");
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  useEffect(() => {
    if (Object.keys(correctUser).length !== 0) {
      passwordRef.current?.focus();
    }
  }, [correctUser]);

  const handleNext = (e) => {
    e.preventDefault();
    const foundUser = users.filter((user) => user.userName === email);
    if (foundUser.length !== 0) {
      setCorrectUser(foundUser);
    } else {
      setUsernameMatch("username does not exit");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === correctUser[0].password) {
      navigate("/dashboard");
    } else {
      setPasswordMatch("incorrect password, try again");
    }
  };

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <motion.div
      className="h-screen w-screen bg-iconBlue"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0.5, 0.71, 0.2, 1.01],
      }}
    >
      {/* <BarLoader size={150} color="#fff" className="flex justify-center" /> */}
      {Object.keys(correctUser).length === 0 ? (
        <div className="h-screen flex justify-center">
          <div className="bg-loginWhite w-1/4 h-2/4 my-auto rounded shadow-2xl">
            <div className=" my-10">
              <div className="my-12">
                <h1 className="text-center text-normalGrey font-bold">Login</h1>
                <p className="text-center text-normalGrey">
                  Please enter your username
                </p>
              </div>
              <div className="flex justify-center mb-10">
                <form onSubmit={handleNext}>
                  <div className="mb-4 pb-2">
                    <input
                      className="border-b w-60 bg-loginWhite border-lightGrey focus:outline-none"
                      type="text"
                      placeholder="Username"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      ref={emailRef}
                    />
                    <p className="text-red text-sm ">{usernameMatch}</p>
                  </div>

                  <div className="flex justify-center my-5">
                    <button
                      type="submit"
                      className="bg-iconBlue w-44 h-10 text-white rounded-2xl"
                    >
                      Next
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-screen flex justify-center">
          <div className="bg-loginWhite w-1/4 h-2/4 my-auto rounded shadow-2xl">
            <div className=" my-10">
              <div className="my-12">
                <h1 className="text-center text-normalGrey font-bold">Login</h1>
                <p className="text-center text-normalGrey">
                  Hi {correctUser[0].name.split(" ")[0]}, enter your password
                </p>
              </div>
              <div className="flex justify-center mb-10">
                <form onSubmit={handleLogin}>
                  <div className="mb-3">
                    <div className="w-60 flex">
                      <input
                        className="border-b w-full bg-loginWhite border-lightGrey focus:outline-none font-lg"
                        type={!showPassword ? "password" : "text"}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        ref={passwordRef}
                      />
                      <div className="border-b border-lightGrey">
                        <div
                          onClick={handleShowPassword}
                          className="hover:cursor-pointer"
                        >
                          {!showPassword ? <IoEyeOff /> : <IoEye />}
                        </div>
                      </div>
                    </div>
                    <p className="text-red text-sm ">{passwordMatch}</p>
                  </div>
                  <div className="flex justify-center my-5">
                    <button
                      type="submit"
                      className="bg-iconBlue w-44 h-10 text-white rounded-2xl"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}
