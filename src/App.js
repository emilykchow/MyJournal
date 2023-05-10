import './App.css';
import React from "react";
import NavBar from "./components/NavBar";
import Login from "./components/login";
import Profile from "./components/Profile";
import Home from "./components/Home";
import { useEffect } from "react";
import { gapi } from "gapi-script";
import { Route, Routes } from "react-router-dom";

const client_id = "411850435088-jgq5l303nf7v5lvb3aursvf8uf6dbhgf.apps.googleusercontent.com"

function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientid: client_id,
        scope: ""
      })
    }
    gapi.load("client:auth2", start)
  })

  return (
    <div className="App">
      <NavBar />
      <Login />
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
