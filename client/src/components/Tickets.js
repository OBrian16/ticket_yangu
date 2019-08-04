import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Header, Responsive, Segment, Item, Label, Button, Image, Divider, Form, Popup, Grid, Input} from 'semantic-ui-react'

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
                    <Segment attached='top'>
                        <Header as='h2' textAlign=''>
                            Confirm Ticket
                        </Header>

                        <Divider></Divider>

                        <Header as='h3' textAlign=''>
                            Check ticket order status
                        </Header>

                        <Form>
                            <Form.Group widths='equal'>
                                <Form.Field>
                                    <label>Email</label>
                                    <Input fluid placeholder='Email' />
                                </Form.Field>
                                <Form.Field>
                                    <label>Phone Number</label>
                                    <Input fluid placeholder='Phone Number' />
                                </Form.Field>
                                <Form.Field>
                                    <label>Order ID</label>
                                    <Input fluid placeholder='Order ID' />
                                </Form.Field>
                            </Form.Group>
                        </Form>

                        <Button type='submit' color='blue'>Confirm Ticket</Button>

                    </Segment >

                    <Segment attached='top'>

                    </Segment >

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