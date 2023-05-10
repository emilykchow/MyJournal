import { GoogleLogout } from "react-google-login";

import React from 'react';

const client_id = "411850435088-jgq5l303nf7v5lvb3aursvf8uf6dbhgf.apps.googleusercontent.com"

function Logout() {

    const onSuccess = () => {
        console.log("LOGOUT SUCCESSFUL")
    }


  return (
    <div>
        <GoogleLogout 
            clientId={client_id}
            buttonText="Logout"
            onLogoutSuccess={onSuccess}
        />
    </div>
  )
}

export default Logout;