import React from 'react';
import { Container, Header, Image} from "semantic-ui-react";

function Media () {
    const kerfoot = require('../assets/kerfoot.webp')
    const tavares = require('../assets/tavares.jpeg')
    const marner = require('../assets/marner.jpg')
    return(
        <Container style={{ margin: 20}}>
            <Header as="h1" dividing style={{color:'white'}}>
                Media
            </Header>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/DWaixJSYXWU" 
                title="YouTube video player" frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen >
            </iframe>
            <Image.Group size='small'>
                <Image src={kerfoot} />
                <Image src={tavares} />
                <Image src={marner} />
            </Image.Group>
        </Container>
    )
}
export default Media
