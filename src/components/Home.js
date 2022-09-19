import React from 'react';
import { Image } from 'semantic-ui-react';
import NewListings from "./NewListings";
import { useMediaQuery } from 'react-responsive';

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
        <Image size='massive'src={'https://cdn.shopify.com/s/files/1/1265/6377/t/9/assets/slide4.jpg?v=94242335884143365241659965036'}/>
      </div>
      <Title/>
      <NewListings/>
    </div>
  );
}

export default Home;
