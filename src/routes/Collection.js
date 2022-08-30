import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Segment, Card, Image } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import Layout from '../components/Layout'
import '../css/Collection.css'

function Collection() {
    const address = useSelector((state) => state.wallet.address)
    const sdk = useSelector((state) => state.wallet.sdk)
    const [nfts, setNFTs] = useState(null)

    useEffect(()=>{
      async function fetchData(){
        if (address){
          const contract = sdk.getNFTDrop("0x50199376EE8073Dc9C1498eD4b18916fb165b779");
          const nfts = await contract.getOwned(address);
          setNFTs(nfts)
          console.log("SDK:", sdk.wallet)
        }
      }
      fetchData()
    },[address, sdk])

    const NFTs = () => {
      if (nfts){
        const Items = nfts.map( (nft) => {
          const key = nft['metadata']['id'].toNumber()
          const name = nft['metadata']['name']
          const image = nft['metadata']['image']
          return(
            <Card key={key} style={{background:'#1E1E1D'}}>
                <Link to={`/nft=${key}`} state={{nft:nft}}>
                    <Image fluid src={image}  centered/>
                  </Link>
                <Card.Content> 
                    <Card.Header style={{color:'white'}}>{name}</Card.Header>
                </Card.Content>
          </Card>)
        })
        return (<Card.Group className="card-group" itemsPerRow={3}>{Items}</Card.Group>)
      }
    }
    return (
      <Layout>
        <div style={{background:'black', paddingBottom:'20%', color:'white'}}>
            <div className='card-container' style={{paddingTop:'5%'}}>
              <h1>COLLECTION</h1>
              <Segment style={{background:'grey'}}>
                  <NFTs/>
              </Segment>
            </div>
          </div>
      </Layout>
    );
}

export default Collection;