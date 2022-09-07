import React from 'react';
import { Image } from 'semantic-ui-react';
import NewListings from "./NewListings";

function Home() {

    return (
      <div style={{background:'black', paddingTop:'5%', paddingBottom:'100%'}}>
        <div style={{margin:'auto', width:'50%'}}>
          <Image size='massive'src={'https://cdn.shopify.com/s/files/1/1265/6377/t/9/assets/slide4.jpg?v=94242335884143365241659965036'}/>
        </div>
        <h1 style={{margin:'auto', width:'50%','color':'white', paddingBottom:'2%', paddingTop:'2%'}}>NEW LISTINGS - LIVE FEED</h1>
        <NewListings/>
      </div>
    );
}

export default Home;
