import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import NewsOverview from "./pages/NewsOverview";
import AddNewsArticle from "./pages/AddNewsArticle";
import Login from "./pages/Login";
import Logout from "./pages/Logout";

import { baseUrl } from "./shared";

import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Login State Handling which is on overall App Level
export const LoginContext = createContext();

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const url = baseUrl + "api/userstatus/";

  async function checkLoginStatus() {
    try {
      const response = await fetch(url, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      if (response.ok) {
        const data = await response.json();

        console.log("logged in");
        console.log(data);

        return true;
      } else {
        console.log("logged out");
        return false;
      }
    } catch (error) {
      // Handle error
      console.error("Error submitting form:", error);
    }
  }

  checkLoginStatus();

  //For testting purpose i will set logged in per default on false
  //const [loggedIn, setLoggedIn] = useState(false);

  const login = () => {
    // Authenticate user and set user information and authentication status
    setLoggedIn(true);
  };

  const logout = () => {
    // Authenticate user and set user information and authentication status
    setLoggedIn(false);
  };

  return (
    <>
      <LoginContext.Provider value={{ loggedIn, login, logout }}>
        <Header />

        <div className="container bg-light p-3">
          <BrowserRouter>
            <Routes>
              <Route path="/newsoverview" element={<NewsOverview />} />
              <Route path="/addnewsarticle" element={<AddNewsArticle />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </BrowserRouter>
        </div>
      </LoginContext.Provider>
    </>
  );
}

export default App;
