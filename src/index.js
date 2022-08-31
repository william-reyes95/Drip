import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import Marketplace from "./routes/Marketplace";
import Collection from "./routes/Collection";
import Drops from "./routes/Drops";
import NFT from "./routes/Nft";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import store from './redux/store'
import { Provider } from 'react-redux'

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mainnet;

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <ThirdwebProvider desiredChainId={activeChainId}>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"/>
      <Provider store={store}>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/drops" element={<Drops />} />
              <Route path="/collection" element={<Collection />} />
              <Route path="/nft=:id" element={<NFT />} />
            </Routes>
        </BrowserRouter>
      </Provider>
    </ThirdwebProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
