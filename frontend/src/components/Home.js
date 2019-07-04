import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Button, Container, Divider, Grid, Header, Icon, Image, List, Menu, Responsive, Segment, Sidebar, Visibility } from 'semantic-ui-react'

import Footer from '../pages/footer'
import CarouselPage from '../carousel/image'

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
                    //inverted
                    textAlign='center'
                    style={{ minHeight: 300, padding: '2em 0em' }}
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
        <Segment style={{ padding: '8em 0em' }} vertical>

        </Segment>
        <Segment style={{ padding: '0em' }} vertical>
            
        </Segment>
        <Segment style={{ padding: '8em 0em' }} vertical>
            
        </Segment>

        <Segment inverted vertical style={{ padding: '0em 0em' }}>
            <Footer />
        </Segment>
    </ResponsiveContainer>
)
export default HomepageLayout