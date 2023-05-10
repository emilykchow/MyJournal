import { GoogleLogin } from "react-google-login";
import { Navigate, Outlet } from "react-router-dom";
import React from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom"

const client_id = "411850435088-jgq5l303nf7v5lvb3aursvf8uf6dbhgf.apps.googleusercontent.com"

function Login() {

    const onSuccess = (res) => {
        console.log("LOGIN SUCCESS! Current user: ", res.profileObj)
    }

    const onFailure = (res) => {
        console.log("LOGIN FAILED! res: ", res)
    }

  return (
    <div>
        <GoogleLogin 
            clientId={client_id}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
        />
    </div>
  )
}

export default Login;