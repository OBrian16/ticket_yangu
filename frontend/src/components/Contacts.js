import React, { Component } from 'react'
import { Container, Divider, Grid, Header, Image, List, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import Footer from '../pages/footer'

class Contacts extends Component {
    render() {
        return (
            <Container>
                <style>{`
              html, body {
                background-color: #F2F3F4 !important;
                min-height: 118em;
              }
            `}
                </style>
                <Segment style={{ padding: '3em 30em' }} raised>

                    <List textAlign='left'>
                        <List.Item>
                            <List.Icon name='users' />
                            <List.Content>Semantic UI</List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Icon name='marker' />
                            <List.Content>New York, NY</List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Icon name='mail' />
                            <List.Content>
                                <a href='mailto:jack@semantic-ui.com'>jack@semantic-ui.com</a>
                            </List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Icon name='linkify' />
                            <List.Content>
                                <a href='http://www.semantic-ui.com'>semantic-ui.com</a>
                            </List.Content>
                        </List.Item>
                    </List>
                </Segment>

                <Segment style={{ padding: '0em 0em' }} vertical secondary>
                    <Footer />
                </Segment>

            </Container>
        );
    }
}

export default Contacts