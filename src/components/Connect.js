import React from "react";
import { useDisconnect, useMetamask } from '@thirdweb-dev/react';
import { useSelector, useDispatch } from 'react-redux'
import { setAddress, setSDK } from '../redux/wallet'
import { ThirdwebSDK } from "@thirdweb-dev/sdk";



function ConnectWallet()  {
    const address = useSelector((state) => state.wallet.address)
    const dispatch = useDispatch()

    // const sdk = useSDK()

    const connectWithMetamask = useMetamask();
    const disconnectWallet = useDisconnect();
  // If a wallet is connected, show disconnect and switch network options
  if (address) {
    return (
        <button className="ui red button" onClick={() => {
          disconnectWallet()
          dispatch(setAddress(false))
          dispatch(setSDK(false))
          }}>
          Disconnect
        </button>
    )
  }
  // If no wallet is connected, show connect wallet options
  return (
    <div>
      <button className="ui primary button" onClick={() => {
        connectWithMetamask()
        dispatch(setAddress('0xf96D90Cdb47cA4Cd5E5Be09FaDca191e07bC6298'))
        const sdk = new ThirdwebSDK("mumbai")
        dispatch(setSDK(sdk))
        }}>
        Connect Metamask
      </button>
    </div>
  )
}

export default ConnectWallet;
