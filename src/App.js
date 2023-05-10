import './App.css';
import React from "react";
import NavBar from "./components/NavBar";
import Login from "./components/login";
import { useEffect } from "react";
import { gapi } from "gapi-script";

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
    </div>
  );
}

export default App;
