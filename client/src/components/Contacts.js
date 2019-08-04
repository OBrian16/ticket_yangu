import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Header, Responsive, Segment, Item, Label, Button, Image, Divider, Form, Popup, Grid, Input, List } from 'semantic-ui-react'

import Footer from '../pages/footer'

const paragraph = <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />


// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
    const isSSR = typeof window === 'undefined'

    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}


class DesktopContainer extends Component {
    state = { name: '', email: '', submittedName: '', submittedEmail: '' }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit = () => {
        const { name, email } = this.state

        this.setState({ submittedName: name, submittedEmail: email })
    }
    render() {
        const { children } = this.props
        const { name, email, submittedName, submittedEmail } = this.state


        return (

            <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>

                <Segment
                    secondary
                    textAlign='left'
                    style={{ minHeight: 300, padding: '5em 30em' }}
                    vertical
                >
                                    <Segment style={{ padding: '5em 30em' }} raised >
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

        <Segment inverted vertical style={{ padding: '10em 0em' }}>
            <Footer />
        </Segment>
    </ResponsiveContainer>
)
export default HomepageLayout