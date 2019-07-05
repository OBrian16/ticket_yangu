import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Button, Container, Divider, Grid, Header, Icon, Image, List, Menu, Responsive, Segment, Sidebar, Visibility } from 'semantic-ui-react'

import Footer from '../pages/footer'
import CarouselPage from '../carousel/image'
import EventCard from '../pages/cards'
import EventCategory from '../pages/categories'

// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
    const isSSR = typeof window === 'undefined'

    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}


class DesktopContainer extends Component {
    state = {}

    render() {
        const { children } = this.props
        const { fixed } = this.state

        return (

            <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
                <Segment
                    secondary
                    textAlign='center'
                    style={{ minHeight: 300, padding: '0em 0em' }}
                    vertical
                >
                    <CarouselPage />
                </Segment>

                {children}
            </Responsive>
        )
    }
}

DesktopContainer.propTypes = {
    children: PropTypes.node,
}


const ResponsiveContainer = ({ children }) => (
    <div>
        <DesktopContainer>{children}</DesktopContainer>
    </div>
)

ResponsiveContainer.propTypes = {
    children: PropTypes.node,
}

const HomepageLayout = () => (
    <ResponsiveContainer>
        <Segment
            textAlign='center'
            style={{ padding: '1em' }}
            vertical>
            <Grid>
                <Grid.Column floated='right' width={4}>
                    <Header as='h2' textAlign=''>
                        Upcoming Events
                            <Header.Subheader>
                            Buy and Book Events Tickets in Advance
                            </Header.Subheader>
                    </Header>
                </Grid.Column>

                <Grid.Column floated='left' width={4}>
                    <Button content='More Events' color='red' icon='calendar alternate outline' />
                </Grid.Column>
            </Grid>

        </Segment>

        <Segment style={{ padding: '3em 30em' }} vertical secondary>
            <EventCard />
        </Segment>

        <Segment
            textAlign='center'
            style={{ padding: '1em' }}
            vertical>
            <Header as='h2' textAlign=''>
                What are you looking for?
                    <Header.Subheader>
                    Choose the Event type in the category below
                    </Header.Subheader>
            </Header>
        </Segment>

        <Segment style={{ padding: '3em 20em' }} vertical secondary>
            <EventCategory />
        </Segment>

        <Segment inverted vertical style={{ padding: '0em 0em' }}>
            <Footer />
        </Segment>
    </ResponsiveContainer>
)
export default HomepageLayout