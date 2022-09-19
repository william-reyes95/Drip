import React , { useState, useEffect } from 'react';
import { Card, Image, Icon, Menu } from 'semantic-ui-react'
import Layout from '../components/Layout';
import { Link } from "react-router-dom";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { useMediaQuery } from 'react-responsive';

export default function Drops() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)'});
    const [drops, setDrops] = useState(null);
    const [itemsPerRow, setItemsPerRow] = useState(3);

    useEffect(()=>{
        if(isTabletOrMobile)
            setItemsPerRow(1);
        else
            setItemsPerRow(3);

        async function fetchData(){
            const sdk = new ThirdwebSDK("mumbai")
            const nftDrop = sdk.getNFTDrop("0x50199376EE8073Dc9C1498eD4b18916fb165b779");
            // setContract(nftDrop)
            const unclaimedNFTs = await nftDrop.getAllUnclaimed();
            setDrops(unclaimedNFTs)
        }
        fetchData()
      }, [isTabletOrMobile])

    const TeamMenu = ()=>{
        return(
            <div className="ui inverted secondary three item menu" style={{background:'1E1E1D'}}>
                <Menu.Item onClick={()=>{console.log('click')}}>
                    TEAMS
                </Menu.Item>
                <Menu.Item onClick={()=>{console.log('click')}}>
                    OVO
                </Menu.Item>
                <Menu.Item onClick={()=>{console.log('click')}}>
                    DREW HOUSE
                </Menu.Item>
            </div>
        )
    }
    const UnclaimedDrops = () =>{
        if(drops){
            // const tmp = [...drops, ...drops, ...drops]
            const Items = drops.map( (nft) => {
                const key = nft['id']
                const name = nft['name']
                const image = nft['image']
                return(
                    <div style={{padding:'5%', margin:'auto'}} key={key}>
                        <Card  style={{background:'#1E1E1D'}}>
                            <Link key={key} to={`/nft=${key}`} state={{nft:{'metadata':nft}}}>
                                <Image src={image}/>
                            </Link>
                            <Card.Content >
                                <Card.Header style={{color:'white'}}>{name}</Card.Header>
                            </Card.Content>
                            <Card.Content extra>
                            <p style={{color:'white'}}>
                                <Icon name='eye' />
                                22 Offers
                            </p>
                            </Card.Content>
                        </Card>
                    </div>
                )
            })
            return (<Card.Group itemsPerRow={itemsPerRow}>{Items}</Card.Group>)
        }
    }

    if(drops){
        return (
            <Layout>
                <div style={{background:'black', color:'white', paddingBottom:'5%', height:'100vh', overflowY:'auto'}}>
                    <div style={{margin:'auto', paddingTop:'5%', textAlign:'center'}}>
                        {/* <h1 style={{paddingBottom:'3%', textAlign:'center'}}>EXCLUSIVE DROPS</h1> */}
                        <Icon name='gem outline' inverted size='huge'/>
                        <TeamMenu/>
                        <UnclaimedDrops/>
                    </div>
                </div>
            </Layout>
        )
    }
    else{
        return(
        <Layout>
            <div style={{background:'black', paddingBottom:'200%', paddingTop:'5%'}}>
                <div className="ui raised very padded text container segment" >
                    <div style={{textAlign:'center'}}>
                        <Icon loading name='circle notched' size='massive'/>
                    </div>
                </div>
            </div>
        </Layout>
        )
    }
  }
