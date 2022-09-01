import React , { useState, useEffect } from 'react';
import { Card, Image, Icon, Segment } from 'semantic-ui-react'
import Layout from '../components/Layout';
// import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";

export default function Drops() {

    // const address = useSelector((state) => state.wallet.address)
    const [drops, setDrops] = useState(null)
    // const [contract, setContract] = useState(null)

    useEffect(()=>{
        async function fetchData(){
            const sdk = new ThirdwebSDK("mumbai")
            const nftDrop = sdk.getNFTDrop("0x50199376EE8073Dc9C1498eD4b18916fb165b779");
            // setContract(nftDrop)
            const unclaimedNFTs = await nftDrop.getAllUnclaimed();
            setDrops(unclaimedNFTs)
        }
        fetchData()
      }, [])

    // const claimDrop = async () =>{
    //     const quantity = 1;
    //     const tx = await contract.claimTo(address, quantity);
    //     const receipt = tx.receipt;
    //     // const claimedTokenId = tx.id;
    //     // const claimedNFT = await tx.data();
    //     if(receipt)
    //         console.log(receipt)
    //         console.log('Claimed!')
    // }

    const UnclaimedDrops = () =>{
        if(drops){
            // const tmp = [...drops, ...drops, ...drops]
            const Items = drops.map( (nft) => {
                const key = nft['id']
                const name = nft['name']
                const image = nft['image']
                console.log(nft)
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
                            {/* <Button fluid positive onClick={claimDrop}>
                                    CLAIM NOW
                            </Button> */}
                        </Card>
                    </div>
                )
            })
            return (<Card.Group itemsPerRow={3}>{Items}</Card.Group>)
        }
    }

    if(drops){
        return (
            <Layout>
                <div style={{background:'black', color:'white', paddingBottom:'20%'}}>
                    <div style={{margin:'auto', width:'50%', paddingTop:'5%'}}>
                        <h1 style={{paddingBottom:'3%'}}>DROPS</h1>
                        <div>
                            <Segment style={{background:'#1E1E1D'}}>
                                <UnclaimedDrops/>
                            </Segment>
                        </div>
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
