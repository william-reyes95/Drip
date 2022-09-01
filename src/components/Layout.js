import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Menu, Image, Icon, Sidebar,  } from 'semantic-ui-react';
import { useMediaQuery } from 'react-responsive';
import ConnectWallet from './Connect';

function Layout(props) {
    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 800px)'})
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)'})
    const [visible, setVisible] = useState(false)

    const Navigation = () =>{
        if(isDesktopOrLaptop)
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
        if(isTabletOrMobile)
            return(
                <Menu style={{background:'#1E1E1D'}} widths={2}>
                    <Menu.Item onClick={() =>{setVisible(!visible)}} style={{width:'20%'}}>
                        <Icon name='bars' size='large' />
                    </Menu.Item>
                    <Menu.Item position='left' style={{width:'60%'}}>
                        <Image src='https://vafloc01.s3.amazonaws.com/WBStatic/site1103961/dist/img/logo.svg' />
                    </Menu.Item>
                </Menu>
            )
    }

    return(
        <div>
            <div style={{'background':'#1E1E1D'}}>
                <Navigation props={props}/>
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
                        width='thin' >
                        <Menu.Item position='right' className="item">
                            <ConnectWallet/>
                        </Menu.Item>
                        <Menu.Item>
                            <Icon name='home' />
                            <Link to="/">Home</Link>
                        </Menu.Item>
                        <Menu.Item >
                            <Icon name='gem' />
                            <Link to="/drops">Drops</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Icon name='shop' />
                            <Link to="/marketplace">Marketplace</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Icon name='box'/>
                            <Link to="/Collection">Collection</Link>
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
