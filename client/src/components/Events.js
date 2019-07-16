import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Header, Responsive, Segment } from 'semantic-ui-react'

import Footer from '../pages/footer'
import Events from '../pages/events'
import SearchExampleStandard from '../pages/search'


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

        return (

            <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
                <Segment
                    textAlign='right'
                    style={{ padding: '1em 30em' }}
                    vertical>
                    <SearchExampleStandard />
                </Segment>

                <Segment
                    secondary
                    textAlign='left'
                    style={{ minHeight: 300, padding: '2em 30em' }}
                    vertical
                >

                    <Events />

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