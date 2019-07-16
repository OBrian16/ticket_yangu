import React from 'react'
import { Header, Icon, Segment, Grid, Flag } from 'semantic-ui-react'

const Reasons = () => (
    <Segment vertical secondary placeholder>
        <Grid columns={2} relaxed='very' stackable>
            <Grid.Column>
                <Header as='h2' textAlign='left' color=''>
                    <Icon name='ticket' color=''/>
                    <Header.Content >
                        No rip-off booking fees!
                    <Header.Subheader>
                            A fair deal for you and your customers
                    </Header.Subheader>
                    </Header.Content>
                    <p></p>

                    <Icon name='users' color='' />
                    <Header.Content>
                        Suitable for any size event
                    <Header.Subheader>
                            Any Event size is covered
                    </Header.Subheader>
                    </Header.Content>
                    <p></p>

                    <Icon name='wizard' color='' />
                    <Header.Content>
                        Easy to Use
                    <Header.Subheader>
                            Manage ticket sales and event registrations easily
                    </Header.Subheader>
                    </Header.Content>

                </Header>

            </Grid.Column>

            <Grid.Column verticalAlign='middle'>
                <Header as='h2' textAlign='left' color=''>
                    <Icon name='money' color=''/>
                    <Header.Content>
                        You take the money directly
                    <Header.Subheader>
                            Use your favourite payment processor
                    </Header.Subheader>
                    </Header.Content>
                    <p></p>

                    <Icon name='thumbs up' color=''/>
                    <Header.Content>
                        You're in control
                    <Header.Subheader>
                            Set new events, view your sales and download ticket lists
                    </Header.Subheader>
                    </Header.Content>
                    <p></p>

                    <Icon name='dollar' color=''/>
                    <Header.Content>
                        Sell tickets in your currency
                    <Header.Subheader>
                            Manage your preferences 
                            <Flag name='ke' />
                            <Flag name='tz' />
                            <Flag name='ug' />

                    </Header.Subheader>
                    </Header.Content>

                </Header>
            </Grid.Column>
        </Grid>

    </Segment>

)

export default Reasons
