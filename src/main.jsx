import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Amplify, { Auth,Storage } from "aws-amplify";
import awsconfig from "./aws-exports";

import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import LogOut from "./pages/LogOut";
import { AuthProtector, AuthProvider } from "./contexts/AuthContext";
import { StateProvider } from "./contexts/StateContext";

Amplify.configure(awsconfig);


ReactDOM.render(
  <StateProvider>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <AuthProtector>
                <Home />
              </AuthProtector>
            }
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/logout" element={<LogOut />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StateProvider>,
  document.getElementById("root"),
);
