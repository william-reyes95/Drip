import React from 'react';
import { Image, Card, Grid } from 'semantic-ui-react';

function NewListings() {
    const images = [1, 2, 3]
    const kerfoot = require('../assets/kerfoot_.png')

    const Feed = () =>{
      const Items = images.map((item, key)=>{
        return(
          <Card key={key} style={{background:'#1E1E1D', 'padding':'5%'}}>
            <Grid>
              <Grid.Column width={4}>
                <Card>
                  <Image src={kerfoot} size='large'/>
                </Card>
              </Grid.Column>
              <Grid.Column width={9}>
                <div style={{color:'white'}}>
                  <h1>Toronto Maple Leafs 2021-22 Blue Set 1 Game Worn Jerseys</h1>
                  <p>Reserve Price: $1000</p>
                  <p>Bid Increment: $100</p>
                  <p>Seller: William Reyes</p>
                </div>
              </Grid.Column>
            </Grid>
          </Card>
        )
      })
      return(<Card.Group itemsPerRow={1} >{Items}</Card.Group>)
    }

    return (
      <div style={{margin:'auto', width:'50%'}}>
        <Feed/>
      </div>
    );
}

export default NewListings;
