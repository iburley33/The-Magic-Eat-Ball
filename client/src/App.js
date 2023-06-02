import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
// import SearchRestraunt from './pages/SearchRestraunts';
// import SavedRestraunts from './pages/SavedRestraunts';
import { useState, useEffect } from "react";
import authService from "./utils/auth";

// import logo from "./logo.svg";

import "./App.css";
import Page from "./components/Page";
import LoginForm from "./components/LoginForms";
import SignupForm from "./components/SignupForms";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("id_token");
    if (token) {
      console.log(token);
      setLoggedIn(true);
    }
  });

  return (
    <Router>
      <header>
        <h1>MAGIC EAT-BALL</h1>
        <div id="login-btns-container">
          {!loggedIn ? (
            <>
              <Link to="/login">
                <button className="btn" id="login-btn">
                  Login
                </button>
              </Link>

              <Link to="/signup">
                <button className="btn" id="signup-btn">
                  Sign Up
                </button>
              </Link>
            </>
          ) : (
            <button
              onClick={() => authService.logout()}
              className="btn"
              id="logout-btn"
            >
              Log out
            </button>
          )}
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
    </Router>
  );
}

export default App;
