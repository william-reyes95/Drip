import React from 'react';
import Layout from '../components/Layout'
import Ownerships from '../components/Ownerships'
import Media from '../components/Media'
import { useLocation } from "react-router-dom";
import { Button, Grid, Image, Segment } from 'semantic-ui-react'
import { useSelector } from 'react-redux';


export default function Nft() {
    const address = useSelector((state) => state.wallet.address)
    const { state } = useLocation();
    // const params = useParams();
 
    const metadata = state['nft']['metadata']
    const attributes = metadata['attributes']
    const owner = state['nft']['owner']
    const name = metadata['name']
    const image = metadata['image']


    const Attributes = () =>{
        if (attributes){
            const Items = attributes.map( (attrib, key) => {
                return(<h3 key={key}>{attrib['trait_type']}: {attrib['value']}</h3>)
            })
            return (<div>{Items}</div>)
        }
    }

    const MetaData = () =>{
        if (metadata){
            const description = metadata['description']
            return(
                <div>
                    <h4>Holder: {owner}</h4>
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
        if(address === owner){
            return(
                <Button negative>List for Sale</Button>
            )
        }else{
            return(
                <Button positive>Make an Offer</Button>
            )
        }
    }
    return (
        <Layout>
            <div style={{background:'black', paddingBottom:'5%'}}>
                <div style={{paddingTop:'5%'}}>
                    <div className="ui raised very padded text container segment" >
                        <h2>{name}</h2>
                        <Segment>
                            <Grid columns={2} relaxed='very'>
                                <Grid.Column>
                                    <p>
                                    <Image src={image} size='medium' />
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
  }
