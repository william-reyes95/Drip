import React from 'react';
import { Segment, Image, Table } from 'semantic-ui-react';

function NewOffers() {

    const marner = require('../assets/marner.jpg')

    return (
      <div>
        <Segment>
          <h1>New Offers Feed</h1>
          <Table singleLine>
            <Table.Header>
              <Table.Row>
              <Table.HeaderCell></Table.HeaderCell>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Offer Price</Table.HeaderCell>
                <Table.HeaderCell>Date</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell><Image src={marner} size='tiny'></Image></Table.Cell>
                <Table.Cell>Alice Wonderland</Table.Cell>
                <Table.Cell>$20</Table.Cell>
                <Table.Cell>August 16, 2022</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Segment>
      </div>
    );
}

export default NewOffers;
