import React from 'react';
import { Image, Table } from 'semantic-ui-react';
import { useMediaQuery } from 'react-responsive';


function LatestSales() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)'});
    const mapping = {'mobile':{'Auction':'A', 'Direct':'D'}, 'desktop':{'Auction':'Auction', 'Direct':'Direct'}}
    const marner = require('../assets/marner.jpg')
    let key;
    if (isTabletOrMobile)
      key = 'mobile'
    else
      key = 'desktop'
    return (
      <div style={{paddingTop:'5%'}}>
        <h1 style={{color:'white'}}>Latest Sales Feed</h1>
          <Table inverted unstackable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell></Table.HeaderCell>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Price</Table.HeaderCell>
                <Table.HeaderCell>Listing</Table.HeaderCell>
                <Table.HeaderCell>Date</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <tbody style={{background:'#1E1E1D', color:'white'}}>
              <Table.Row>
                <Table.Cell><Image src={marner} size='tiny'></Image></Table.Cell>
                <Table.Cell>Alice Wonderland</Table.Cell>
                <Table.Cell>$20</Table.Cell>
                <Table.Cell>{mapping[key]['Auction']}</Table.Cell>
                <Table.Cell>August 16, 2022</Table.Cell>
              </Table.Row>
              <Table.Row>
              <Table.Cell><Image src={marner} size='tiny'></Image></Table.Cell>
              <Table.Cell>Bob Ross</Table.Cell>
                <Table.Cell>$50</Table.Cell>
                <Table.Cell>{mapping[key]['Direct']}</Table.Cell>
                <Table.Cell>August 15, 2022</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Image src={marner} size='tiny'></Image></Table.Cell>
                <Table.Cell>Charlie Chocolate</Table.Cell>
                <Table.Cell>$10</Table.Cell>
                <Table.Cell>{mapping[key]['Auction']}</Table.Cell>
                <Table.Cell>August 14, 2022</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Image src={marner} size='tiny'></Image></Table.Cell>
                <Table.Cell>David D</Table.Cell>
                <Table.Cell>$10</Table.Cell>
                <Table.Cell>{mapping[key]['Auction']}</Table.Cell>
                <Table.Cell>August 13, 2022</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Image src={marner} size='tiny'></Image></Table.Cell>
                <Table.Cell>Eric E</Table.Cell>
                <Table.Cell>$10</Table.Cell>
                <Table.Cell>{mapping[key]['Auction']}</Table.Cell>
                <Table.Cell>August 12, 2022</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell><Image src={marner} size='tiny'></Image></Table.Cell>
                <Table.Cell>Frank F</Table.Cell>
                <Table.Cell>$10</Table.Cell>
                <Table.Cell>{mapping[key]['Direct']}</Table.Cell>
                <Table.Cell>August 11, 2022</Table.Cell>
              </Table.Row>
            </tbody>
          </Table>
      </div>
    );
}

export default LatestSales;
