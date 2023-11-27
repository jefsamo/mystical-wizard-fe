import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { MetaMaskUIProvider } from "@metamask/sdk-react-ui";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <MetaMaskUIProvider
        sdkOptions={{
          dappMetadata: {
            name: "Mystical Wizard",
          },
        }}
      >
        <App />
      </MetaMaskUIProvider>
    </BrowserRouter>
  </React.StrictMode>
);
