import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Button, Container, Divider, Grid, Header, Icon, Image, List, Menu, Responsive, Segment, Sidebar, Visibility, Form } from 'semantic-ui-react'

import Footer from '../pages/footer'
import EventCard from '../pages/cards'


// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
    const isSSR = typeof window === 'undefined'

    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}


class Event extends Component {
    state = {}

    render() {
        const { children } = this.props
        const { fixed } = this.state

        return (

            <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
                <Segment
                    textAlign='center'
                    style={{ padding: '1em' }}
                    vertical>
                    <Header as='h2' textAlign=''>
                        Why use ticketyangu?
                    <Header.Subheader>
                            Below are the reasons to consider ticketyangu
                    </Header.Subheader>
                    </Header>
                </Segment>

                <Segment
                    secondary
                    textAlign='center'
                    style={{ minHeight: 300, padding: '0em 0em' }}
                    vertical
                >

                    <EventCard />
                    <EventCard />
                    <EventCard />

                </Segment>

                {children}
            </Responsive>
        )
    }
}

Event.propTypes = {
    children: PropTypes.node,
}


const ResponsiveContainer = ({ children }) => (
    <div>
        <Event>{children}</Event>
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
            <Header as='h2' textAlign=''>
                Why use ticketyangu?
                    <Header.Subheader>
                    Below are the reasons to consider ticketyangu
                    </Header.Subheader>
            </Header>
        </Segment>

        <Segment inverted vertical style={{ padding: '0em 0em' }}>
            <Footer />
        </Segment>
    </ResponsiveContainer>
)
export default HomepageLayout