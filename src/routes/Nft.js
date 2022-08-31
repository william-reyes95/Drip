import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout'
import Ownerships from '../components/Ownerships'
import Media from '../components/Media'
import { useParams } from "react-router-dom";
import { Button, Grid, Image, Segment, Icon } from 'semantic-ui-react'
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { useSelector } from 'react-redux';


export default function Nft() {
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
                return(<h3 key={key}>{attrib['trait_type']}: {attrib['value']}</h3>)
            })
            return (<div>{Items}</div>)
        }
    }

    const MetaData = () =>{
        if (nft){
            const description = nft.metadata.description
            return(
                <div>
                    <h4>Holder: {nft.owner}</h4>
                    <h3>Description</h3>
                    <p>{description}</p>
                    <div>
                        <h2>Story</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus, purus non convallis tincidunt, 
                            nulla massa suscipit ipsum, pellentesque porta metus enim nec nunc. Phasellus laoreet pretium sem, 
                            gravida ornare nisl mollis a. Vestibulum lobortis orci eget urna ultricies suscipit. 
                            Praesent finibus orci quis libero lobortis posuere. Vivamus sed blandit risus, 
                            pellentesque feugiat eros. Cras tristique facilisis est, et ultrices nunc vestibulum eu. 
                            Pellentesque diam felis, consequat ut arcu sit amet, vehicula maximus nisi. Cras non elit sapien.
                            Nulla varius hendrerit efficitur. Cras et sem neque. Quisque quis erat non libero feugiat pharetra a nec lacus.
                            Donec eleifend nunc eu sollicitudin ullamcorper. Fusce fermentum pellentesque augue ut fringilla.
                        </p>
                    </div>
                    <Media/>
                    <h2>Ownership History</h2>
                    <Ownerships/>
                </div>)
        }
    }

    const Sell = () =>{
        if(address === nft.owner){
            return(
                <Button negative>List for Sale</Button>
            )
        }else{
            return(
                <Button positive>Make an Offer</Button>
            )
        }
    }
    if(nft){
        return (
            <Layout>
                <div style={{background:'black', paddingBottom:'5%'}}>
                    <div style={{paddingTop:'5%'}}>
                        <div className="ui raised very padded text container segment" >
                            <h2>{nft.metadata.name}</h2>
                            <Segment>
                                <Grid columns={2} relaxed='very'>
                                    <Grid.Column>
                                        <p>
                                        <Image src={nft.metadata.image} size='medium' />
                                        </p>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Attributes/>
                                        <br/>
                                        <Sell/>
                                    </Grid.Column>
                                </Grid>
                            </Segment>
                            <MetaData/>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }else{
        return(
        <Layout>
            <div style={{background:'black', paddingBottom:'200%', paddingTop:'5%'}}>
            <div className="ui raised very padded text container segment" >
                <div style={{textAlign:'center'}}>
                    <Icon loading name='circle notched' size='massive'/>
                </div>
            </div>
            </div>
        </Layout>)
    }
  }
