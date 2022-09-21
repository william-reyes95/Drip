import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout'
import Ownerships from '../components/Ownerships'
import Media from '../components/Media'
import { useParams } from "react-router-dom";
import { Button, Grid, Image, Segment, Icon, Card, Accordion, Header, List, Table } from 'semantic-ui-react'
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { ethers } from 'ethers';

const sticker = require('../assets/RS-Authentic-Sticker.png');

export default function Nft() {
    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 800px)'})
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)'})

    const [activeIndex, setIndex] = useState(null)
    const address = useSelector((state) => state.wallet.address)
    const [nft, setNFT] = useState(null);
    const params = useParams();
    const tokenId = params['id']

    useEffect(() =>{
        const getNFT = async ()=>{
            const address = "0x50199376EE8073Dc9C1498eD4b18916fb165b779"
            const sdk = new ThirdwebSDK("mumbai")
            const contract = await sdk.getContract(address)

            const nft = await contract.nft.get(tokenId)
            console.log(nft)
            setNFT(nft)
        }
        getNFT()
    }, [tokenId])

    const Attributes = () =>{
        if (nft){
            const Items = nft.metadata.attributes.map( (attrib, key) => {
                return(<List.Item key={key}>{attrib['trait_type']}: {attrib['value']}</List.Item>)
            })
            return (<List>{Items}</List>)
        }
    }

    const Sell = () =>{
        if(address === nft.owner){
            return(
                <Button fluid negative>List for Sale</Button>
            )
        }else{
            return(
                <div>
                    <Button inverted >Buy Now</Button>
                    <Button inverted >Place Bid</Button>
                </div>
            )
        }
    }

   const handleClick = (e, titleProps) => {
        const { index } = titleProps;
        if(activeIndex === index)
            setIndex(null)
        else
            setIndex(index)
      }
    const Bids = ()=>{
        return(
            <Table basic='very' celled inverted unstackable>
                <Table.Header>
                    <Table.Row>
                    <Table.HeaderCell>Buyer</Table.HeaderCell>
                    <Table.HeaderCell>Sale Price</Table.HeaderCell>
                    <Table.HeaderCell>Date / Time</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>
                            <Header as='h4'>
                                <Header.Content style={{color:'white'}}>
                                    Alice Wonderland
                                    <Header.Subheader style={{color:'white'}}>0x781e8f5e6FD7430c8F677E5C5C144c76eF38c9b4</Header.Subheader>
                                </Header.Content>
                            </Header>
                        </Table.Cell>
                        <Table.Cell>22</Table.Cell>
                        <Table.Cell>Aug 7, 22 1:04pm</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        )
    }
    const Jersey = () => {
        return(
            <div style={{paddingBottom:'5%', margin:'auto', width:'50%', color:'white'}}>
                <Grid columns={3} relaxed='very'>
                    <Grid.Column>
                        <p>
                        <Image src={nft.metadata.image} size='medium' />
                        </p>
                    </Grid.Column>
                    <Grid.Column>
                        <h1>{nft.metadata.name}</h1>
                        <Attributes/>
                        <br/>
                        <Sell/>
                        <div style={{paddingTop:'5%'}}>
                            <List >
                                <List.Item>View Bids</List.Item>
                                <List.Item>View Ownership History</List.Item>
                                <List.Item>Collection:</List.Item>
                                <List.Item>Authentic Original: Verified</List.Item>
                            </List>
                       </div>
                    </Grid.Column>
                    <Grid.Column>
                        <Image src={sticker} />
                    </Grid.Column>
                </Grid>
                <Segment style={{background:'#1E1E1D'}}>
                    <h1>Jersey Details</h1>
                    <p>{nft.metadata.description}</p>
                </Segment>
                <Segment style={{background:'#1E1E1D'}}>
                    <h1>Story</h1>
                    <p>Cras tristique facilisis est, et ultrices nunc vestibulum eu. 
                        Pellentesque diam felis, consequat ut arcu sit amet, vehicula maximus nisi. Cras non elit sapien.
                        Nulla varius hendrerit efficitur. Cras et sem neque.
                    </p>
                    <Media/>
                </Segment>
                <Segment style={{background:'#1E1E1D', height:'200px'}}>
                    <h1>Condition Report</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus, purus non convallis tincidunt, 
                        nulla massa suscipit ipsum, pellentesque porta metus enim nec nunc. Phasellus laoreet pretium sem, 
                        gravida ornare nisl mollis a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus, purus non convallis tincidunt, 
                        nulla massa suscipit ipsum, pellentesque porta metus enim nec nunc. Phasellus laoreet pretium sem, 
                        gravida ornare nisl mollis a.</p>
                </Segment>
                <Segment style={{background:'#1E1E1D', height:'200px'}}>
                        <h1>Bids</h1>
                        <Bids/>
                </Segment>
                <Segment style={{background:'#1E1E1D'}}>
                        <h1>Ownership History</h1>
                        <Ownerships/>
                </Segment>
            </div>
        )
    }
    if(nft){
        let owner;
        if (nft.owner === ethers.constants.AddressZero)
            owner = 'N/A'
        else
            owner = nft.owner
        if(isDesktopOrLaptop)
            return (
                <Layout>
                    <div style={{background:'black', paddingTop:'3%', height:'100vh', overflowY:'auto'}}>
                        <Jersey/>
                    </div>
                </Layout>
            );
        if (isTabletOrMobile)
            return(
                <Layout>
                    <div style={{background:'black',  height:'100vh', overflowY:'auto', paddingTop:'5%'}}>
                        <div style={{margin:'auto', width:'70%'}}>
                            <Segment style={{background:'#1E1E1D'}}>
                            <Card fluid style={{margin:'auto', background:'#1E1E1D'}}>
                                <Image src={nft.metadata.image} fluid/>
                                <Card.Content >
                                    <Header style={{color:'white'}}>
                                        {nft.metadata.name}
                                    </Header>
                                </Card.Content>
                                <Button fluid inverted>MAKE OFFER</Button>

                                <Accordion inverted style={{color:'white'}}>
                                    <Accordion.Title
                                    active={activeIndex === 0}
                                    index={0}
                                    onClick={handleClick}
                                    >
                                    <Icon name='dropdown' />
                                    DESCRIPTION
                                    </Accordion.Title>
                                    <Accordion.Content active={activeIndex === 0}>
                                    <p>Holder: {owner}</p>
                                    <p>{nft.metadata.description}</p>
                                    </Accordion.Content>

                                    <Accordion.Title
                                    active={activeIndex === 1}
                                    index={1}
                                    onClick={handleClick}
                                    >
                                    <Icon name='dropdown' />
                                    DETAILS
                                    </Accordion.Title>
                                    <Accordion.Content active={activeIndex === 1}>
                                        <Attributes/>
                                    </Accordion.Content>

                                    <Accordion.Title
                                    active={activeIndex === 2}
                                    index={2}
                                    onClick={handleClick}
                                    >
                                    <Icon name='dropdown' />
                                    STORY
                                    </Accordion.Title>
                                    <Accordion.Content active={activeIndex === 2}>
                                        <p> 
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus, purus non convallis tincidunt, 
                                        nulla massa suscipit ipsum, pellentesque porta metus enim nec nunc. Phasellus laoreet pretium sem, 
                                        gravida ornare nisl mollis a.
                                        </p>
                                    </Accordion.Content>
                                </Accordion>
                            </Card>
                            </Segment>
                        </div>
                    </div>
                </Layout>
            )
    }else{
        return(
        <Layout>
            <div style={{background:'black', height:'100vh', paddingTop:'5%'}}>
                <div className="ui raised very padded text container segment" >
                    <div style={{textAlign:'center'}}>
                        <Icon loading name='circle notched' size='massive'/>
                    </div>
                </div>
            </div>
        </Layout>)
    }
  }
