import React from 'react';
import { Image } from 'semantic-ui-react';
import NewListings from "./NewListings";
import { useMediaQuery } from 'react-responsive';
const banner = require('../assets/ovo.png');

function Home() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)'});
  const Title = () =>{
    if (!isTabletOrMobile)
      return(
      <h1 style={{color:'white', paddingBottom:'2%', paddingTop:'2%'}}>
        New Listings - Live Feed
      </h1>
      )
    else
        return(<div></div>)
  }

  return (
    <div style={{background:'black', paddingTop:'5%', paddingBottom:'5%', height:'100vh', overflowY:'auto', margin:'auto', width:'50%'}}>
      <div>
        <Image size='massive'src={banner}/>
      </div>
      <Title/>
      <NewListings/>
    </div>
  );
}

export default Home;
