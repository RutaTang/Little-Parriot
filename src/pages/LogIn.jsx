import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";

import { AuthContext } from "../contexts/AuthContext";
import PopUp from "../components/PopUp";

async function logIn(email, password) {
  try {
    const user = await Auth.signIn({ username: email, password: password });
    return user;
  } catch (error) {
    console.log("error signing in", error);
    throw error;
  }
}

const LogIn = () => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(-1);
  const processLogIn = () => {
    setLoginStatus(0);
    logIn(email, password)
      .then((user) => {
        console.log("suc");
        setUser(user);
        localStorage.setItem("user", user);
        setLoginStatus(1);
      }).catch((error) => {
        console.log("error", error);
        setLoginStatus(2);
      });
  };
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  });

  const LogInPopUp = ({ status }) => {
    status = status ?? -1;
    if (status === -1) return <></>;
    if (status === 0) return <PopUp text="Loging up..." bgColor="#57A9FB" />;
    if (status === 1) {
      return <PopUp text="Log in successfully" bgColor="#23C343" />;
    }
    if (status === 2) return <PopUp text="Log in fail" bgColor="#F53F3F" />;
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center relative">
      <LogInPopUp status={loginStatus} />
      <div className="h-screen w-screen absolute top-0 left-0 -z-10"></div>
      <div className="md:w-[50%] md:h-[50%] w-[90%] h-[90%] flex flex-col justify-center text-center">
        <h1 className="text-5xl md:mb-20 mb-10">Welcome to Little Parrot</h1>
        <div>
          <h3 className="text-3xl mb-14 text-black">LOG IN</h3>
          <p>Email</p>
          <input
            key="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
            placeholder="Please type your email"
            className="text-center border rounded-lg outline-yellow-400 px-2 py-1 w-2/3 mt-2"
          />
          <p className="mt-5">Password</p>
          <input
            key="pwd"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Please type password"
            className="text-center border rounded-lg outline-yellow-400 px-2 py-1 w-2/3 mt-2"
          />
          <div className="mt-10">
            <button
              onClick={() => {
                processLogIn();
              }}
              className="bg-orange-300 px-5 py-2 rounded-md"
            >
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
