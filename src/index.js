import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <Auth0Provider
      domain="dev-ocfdfeoz5ure58u8.us.auth0.com"
      clientId="r1LKB4j4ywO34OGN4CZHlh9itOdq1SWo"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
      {/* </BrowserRouter> */}
    </Auth0Provider>
  </React.StrictMode>
);

reportWebVitals();
