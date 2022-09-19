import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Menu, Image, Icon, Sidebar,  } from 'semantic-ui-react';
import { useMediaQuery } from 'react-responsive';
import ConnectWallet from './Connect';

const logo = require('../assets/RS-Authentic-Originals.png');

function Layout(props) {
    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 800px)'})
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)'})
    const [visible, setVisible] = useState(false);

    const Navigation = () =>{
        if(isDesktopOrLaptop)
            return(
                <div style={{background:'black'}} className="ui inverted six item menu">
                    <Menu.Item>
                        {/* <Image src='https://vafloc01.s3.amazonaws.com/WBStatic/site1103961/dist/img/logo.svg' /> */}
                        <Image src={logo} />
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
                </div>)
        if(isTabletOrMobile)
            return(
                <Menu style={{background:'black'}} widths={2}>
                    <Menu.Item onClick={() =>{setVisible(!visible)}} style={{width:'20%'}}>
                        <Icon name='bars' size='large' inverted />
                    </Menu.Item>
                    <Menu.Item position='left' style={{width:'60%'}}>
                        <Image src={logo} />
                    </Menu.Item>
                </Menu>
            )
    }

    return(
        <div>
            <div style={{'background':'#1E1E1D'}}>
                <Navigation/>
            </div>
            <div style={{background:'black'}}>
                <Sidebar.Pushable>
                    <Sidebar
                        as={Menu}
                        animation='overlay'
                        inverted
                        onHide={() => setVisible(false)}
                        vertical
                        visible={visible}
                        width='wide' >
                        <Menu.Item className="item" style={{textAlign:'center'}}>
                            <ConnectWallet/>
                        </Menu.Item>
                        <Menu.Item>
                            <Icon name='home' size="large"/>
                            <Link to="/" style={{color:'white', fontSize:'150%'}}>Home</Link>
                        </Menu.Item>
                        <Menu.Item >
                            <Icon name='gem' size="large"/>
                            <Link to="/drops" style={{color:'white', fontSize:'150%'}}>Drops</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Icon name='shop' size="large"/>
                            <Link to="/marketplace" style={{color:'white', fontSize:'150%'}}>Marketplace</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Icon name='box'size="large"/>
                            <Link to="/Collection" style={{color:'white', fontSize:'150%'}}>Collection</Link>
                        </Menu.Item>
                    </Sidebar>

                    <Sidebar.Pusher>
                        {props.children}
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        </div>
    )
}
export default Layout;
