import React , { useState, useEffect } from 'react';
import Layout from '../components/Layout'
import { Grid, Image, Container, Menu, Icon } from 'semantic-ui-react';
import LatestSales from "../components/LatestSales";
import '../css/marketplace.css';
import { ThirdwebSDK } from "@thirdweb-dev/sdk";


export default function Marketplace() {
    const [allListings, setAllListings] = useState(null)

    useEffect(()=>{
        async function fetchData(){
            const sdk = new ThirdwebSDK("mumbai")
            const marketplace = sdk.getMarketplace("0x0E3495883C3697098A0100433EE8F7ce6B493280");
            const all_listings = await marketplace.getAllListings();
            setAllListings(all_listings)
        }
        fetchData()

      },[])

    const AllListings = () =>{
        if(allListings){
            // const tmp = [activeListings[0], activeListings[0], activeListings[0]]
            const Items = allListings.map( (listing, key) => {
                const asset = listing['asset']
                const image = asset['image']
                const name = asset['name']
                const description = asset['description']
                const buyoutPrice = listing['buyoutCurrencyValuePerToken']['displayValue']
                const symbol = listing['buyoutCurrencyValuePerToken']['symbol']
                var reservePrice = null
                var endTime = null
                var listingType = null
                try{
                    reservePrice = listing['reservePriceCurrencyValuePerToken']['displayValue']
                    endTime = listing['endTimeInEpochSeconds'].toNumber()
                }catch{
                    reservePrice = 0
                    endTime = 'Indefinite'
                }
                if(reservePrice){
                    listingType = 'Auction Listing'
                }else{
                    listingType = 'Direct Listing'
                }

            return(
                <Grid key={key}>
                    <Grid.Column width={4}>
                            <Image src={image} size='small'/>
                    </Grid.Column>
                    <Grid.Column width={9}>
                        <h3>{listingType}</h3>
                        <h4>{name}</h4>
                        <p>{description}</p>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <p>Buyout: {buyoutPrice} {symbol}</p>
                        <p>Reserve: {reservePrice} {symbol}</p>
                        <p>End Time: {endTime}</p>
                    </Grid.Column>
                  </Grid>
                )
            })
            return (<div>{Items}</div>)
        }else{
            return (
            <div style={{background:'black'}}>
                <div style={{textAlign:'center'}}>
                    <Icon loading name='circle notched' size='massive'/>
                </div>
            </div>
            )
        }
    }

    const TeamMenu = ()=>{
        return(
            <div className="ui inverted secondary six item menu" style={{background:'1E1E1D', padding:'2%'}}>
                <Menu.Item onClick={()=>{console.log('click')}}>
                    LEAFS
                </Menu.Item>
                <Menu.Item onClick={()=>{console.log('click')}}>
                    RAPTORS
                </Menu.Item>
                <Menu.Item onClick={()=>{console.log('click')}}>
                    TFC
                </Menu.Item>
                <Menu.Item onClick={()=>{console.log('click')}}>
                    ARGOS
                </Menu.Item>
            </div>
        )
    }

    return (
        <Layout>
            <Container fluid style={{background:'black', paddingBottom:'5%', paddingTop:'5%'}}>
            <div style={{margin:'auto', width:'50%'}}>
            </div>
                <div style={{margin:'auto', width:'50%'}}>
                    <TeamMenu/>
                </div>
                <div>
                    <h1 style={{margin:'auto', width:'50%','color':'white', paddingBottom:'2%', paddingTop:'2%'}}>DIRECT LISTINGS</h1>
                    <div style={{margin:'auto', width:'50%', padding:'2%', color:'white', background:'#1E1E1D'}}>
                        <AllListings/>
                    </div>
                    <LatestSales/>
                </div>

            </Container>
        </Layout>
    );
  }
