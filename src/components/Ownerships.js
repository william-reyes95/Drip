import React from "react";
import { Header, Table, Icon } from 'semantic-ui-react'
import { useMediaQuery } from 'react-responsive';

function Ownership() {
    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 800px)'})
    if(isDesktopOrLaptop)
        return(
            <Table basic='very' celled inverted unstackable>
                <Table.Header>
                    <Table.Row>
                    <Table.HeaderCell>Buyer</Table.HeaderCell>
                    <Table.HeaderCell>Sale Price</Table.HeaderCell>
                    <Table.HeaderCell>Seller</Table.HeaderCell>
                    <Table.HeaderCell>Date / Time</Table.HeaderCell>
                    <Table.HeaderCell>TX</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>
                            <Header as='h4'>
                                <Header.Content style={{color:'white'}}>
                                    Alice Wonderland
                                    <Header.Subheader style={{color:'white'}}>0x781e8f5e6FD7430c8F677E5C5C144c76eF38c9b4</Header.Subheader>
                                </Header.Content>
                            </Header>
                        </Table.Cell>
                        <Table.Cell>22</Table.Cell>
                        <Table.Cell>Bob Ross</Table.Cell>
                        <Table.Cell>Aug 7, 22 1:04pm</Table.Cell>
                        <Table.Cell><Icon name='external alternate' /></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            <Header as='h4' image>
                                <Header.Content style={{color:'white'}}>
                                    Bob Ross
                                    <Header.Subheader style={{color:'white'}}>0x781e8f5e6FD7430c8F677E5C5C144c76eF38c9b4</Header.Subheader>
                                </Header.Content>
                            </Header>
                        </Table.Cell>
                        <Table.Cell>15</Table.Cell>
                        <Table.Cell>Charlie</Table.Cell>
                        <Table.Cell>Aug 6, 22 12:04pm</Table.Cell>
                        <Table.Cell><Icon name='external alternate' onClick={()=>{console.log('Click!')}}/></Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        )
    
}
export default Ownership
