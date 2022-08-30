import React from "react";
import { Link } from "react-router-dom";
import { Menu, Image } from 'semantic-ui-react';

import ConnectWallet from './Connect'

function Header (){
    return(
        <div style={{background:'#1E1E1D'}} className="ui inverted six item menu">
            <Menu.Item>
                <Image src='https://vafloc01.s3.amazonaws.com/WBStatic/site1103961/dist/img/logo.svg' />
            </Menu.Item>
            <Menu.Item className="item">
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item className="item">
                <Link to="/drops">Drops</Link>
            </Menu.Item>
            <Menu.Item className="item">
                <Link to="/marketplace">Marketplace</Link>
            </Menu.Item>
            <Menu.Item className="item">
                <Link to="/Collection">Collection</Link>
            </Menu.Item>

            <Menu.Item className="item">
                <ConnectWallet/>
            </Menu.Item>
        </div>
    )
}
export default Header
