import React from "react";
import { createRoot } from "react-dom/client";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import App from "./App";
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
        <App/>
      </Provider>
    </ThirdwebProvider>
);
