import React from 'react';
import { Image, Card, Grid, Icon } from 'semantic-ui-react';
import { useMediaQuery } from 'react-responsive';


function NewListings() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)'});
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

    const MobileFeed = () =>{
      const Items = images.map( (item, key)=>{
        return(
          <Card key={key} style={{background:'#1E1E1D'}}>
            <Image src={kerfoot}/>
            <Card.Content >
              <Card.Header style={{color:'white'}}>Toronto Maple Leafs 2021-22 Blue Set 1 Game Worn Jerseys</Card.Header>
            </Card.Content>
            <Card.Content extra>
              <p style={{color:'white'}}>
                  {`Seller: William Reyes`}
              </p>
              <p style={{color:'white'}}>
                  {`Reserve Price: `}
                  <Icon fitted name='dollar sign' color='green'/>
                  1000
              </p>
              <p style={{color:'white'}}>
                  {`Bid Increment: `}
                  <Icon fitted name='dollar sign' color='green' />
                  100
              </p>
            </Card.Content>
          </Card>
        )
      })
      return(<Card.Group itemsPerRow={1} >{Items}</Card.Group>)
    }

    if(isTabletOrMobile){
      return(
        <div style={{margin:'auto', width:'50%'}}>
          <MobileFeed/>
        </div>
      )
    }else{
      return (
        <div style={{margin:'auto', width:'50%'}}>
          <Feed/>
        </div>
      );
    }
}

export default NewListings;
