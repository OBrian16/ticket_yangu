import React, { Component } from 'react'
import { Container, Divider, Grid, Header, Image, List, Segment, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import Footer from '../pages/footer'

class Contacts extends Component {
    render() {
        return (
            <Container>
                <style>{`
              html, body {
                background-color: #F2F3F4 !important;
                min-height: 8em;
              }
            `}
                </style>
                <Segment style={{ padding: '3em 30em' }} raised >
                    <Header as='h3' textAlign='left' color=''>
                        <Header.Content >
                            SUPPORT
                        </Header.Content>
                    </Header>
                    <Divider></Divider>
                    <List textAlign='left'>
                        <List.Item>
                            <List.Icon name='building' color='blue' />
                            <List.Content>I&M Buliding, Kenyatta Avenue
                                <p></p> P.O Box 123-00100
                            </List.Content>
                        </List.Item>

                        <List.Item>
                            <List.Icon name='' color='blue' />
                            <List.Content>Nairobi, Kenya</List.Content>
                        </List.Item>

                        <List.Item>
                            <List.Icon name='phone' color='blue' />
                            <List.Content>
                                +254726618252
                            </List.Content>
                        </List.Item>

                        <List.Item>
                            <List.Icon name='mail' color='blue' />
                            <List.Content>
                                <a href='mailto:communication@ticketyangu.co.ke'>communication@ticketyangu.co.ke</a>
                            </List.Content>
                        </List.Item>

                        <List.Item>
                            <List.Icon name='address card outline' color='blue' />
                            <List.Content>
                                <a href='http://www.ticketyangu.com'>www.ticketyangu.com</a>
                            </List.Content>
                        </List.Item>

                    </List>
                </Segment>

                <Segment
                    inverted
                    textAlign='center'
                    style={{ minHeight: 600, padding: '6em 60em' }}  >                  
                    <Footer />
                </Segment>

            </Container >
        );
    }
}

export default Contacts