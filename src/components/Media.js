import React from 'react';
import {Image} from "semantic-ui-react";

function Media () {
    const kerfoot = require('../assets/kerfoot.webp')
    const tavares = require('../assets/tavares.jpeg')
    const marner = require('../assets/marner.jpg')
    return(
        <div style={{margin:'auto'}}>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/DWaixJSYXWU" 
                title="YouTube video player" frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen >
            </iframe>
            <div>
                <Image.Group size='small'>
                    <Image src={kerfoot} />
                    <Image src={tavares} />
                    <Image src={marner} />
                </Image.Group>
            </div>

        </div>
    )
}
export default Media
