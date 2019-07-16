import React from 'react'
import {
    Container,
    Divider,
    Grid,
    Header,
    List,
    Segment,
} from 'semantic-ui-react'
import SocialLink from './social'

const Footer = () => (
    <div>
        <Segment inverted vertical style={{ minWidth: 100, padding: '9em 0em' }}>
            <Container >
                <Grid stackable textAlign='left'>
                    <Grid.Column width={3}>
                        <Header inverted as='h4' content='Services' />
                        <List link inverted>
                            <List.Item as='a'>Events</List.Item>
                            <List.Item as='a'>Blogs</List.Item>
                            <List.Item as='a'>Login</List.Item>
                            <List.Item as='a'>Register</List.Item>
                            <List.Item as='a'>Write a review</List.Item>


                        </List>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Header inverted as='h4' content='Usage' />
                        <List link inverted>
                            <List.Item as='a'>Site Search</List.Item>
                            <List.Item as='a'>Buy a Ticket</List.Item>
                            <List.Item as='a'>Sell your Ticket</List.Item>
                            <List.Item as='a'>Link Three</List.Item>
                            <List.Item as='a'>FAQ's</List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Header inverted as='h4' content='Quicklinks' />
                        <List link inverted>
                            <List.Item as='a'>Pricing</List.Item>
                            <List.Item as='a'>Support</List.Item>
                            <List.Item as='a'>Private Policy</List.Item>
                            <List.Item as='a'>Terms and Conditions </List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={7}>
                        <Header inverted as='h4' content='Connect with Us' />
                        <p>
                            <SocialLink />
                        </p>
                    </Grid.Column>
                </Grid>

                <Divider />
                Copyright © Ticketyangu 2019 // All rights reserved
            </Container>
        </Segment>
    </div>
)

export default Footer