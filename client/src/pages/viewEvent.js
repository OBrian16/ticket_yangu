import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Header, Responsive, Segment, Item, Label, Button, Image, Divider } from 'semantic-ui-react'

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
    state = {}

    render() {
        const { children } = this.props

        return (

            <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>

                <Segment
                    secondary
                    textAlign='left'
                    style={{ minHeight: 300, padding: '4em 30em' }}
                    vertical
                >
                    <Segment  >
                        <Header as='h2' textAlign=''>
                            Design For Designers
                        </Header>

                        <Divider></Divider>

                        <Item.Group divided>
                            <Item>
                                <Item.Image size='medium' src={require('../images/eventImages/dfd.jpg')}></Item.Image>

                                <Item.Content>
                                    <Item.Header as='a'>FRI, 26TH JULY</Item.Header>
                                    <Item.Meta>
                                        <b>Active till:</b> Wednesday, 29th July 2019
                                        <p></p>
                                        <b>Time:</b> 10:00 AM - 04:30 PM
                                        <p></p>
                                        <b>Venue:</b>JKUAT University, Nairobi CBD
                                        <p></p>
                                        <b>Host:</b> Andela Learning Community
                                        <p></p>
                                    </Item.Meta>

                                    <Item.Extra>
                                        <Label>JKUAT</Label>
                                        <Label icon='globe' content='Additional Languages' />
                                        <Button size='' primary floated='right'>
                                            Buy tickets
                                        </Button>
                                    </Item.Extra>

                                    <Divider />

                                    <Item.Description>
                                        The first edition of the Design for Designers - the international festival dedicated to graphic design -
                                        will take place July 26-29, featuring workshops,
                                        talks, performances and exhibitions that will celebrate the fusion among grahic arts.
                                        Hosted by <b>Andela Learning Community, kenya</b>
                                        <Divider hidden />
                                        -Build and Grow your Graphic Design Skills?
                                        <p></p>
                                        <b>Tea and snacks will be provided </b>
                                        <p></p>
                                        <code><b>This Event is for you - Come ready to to learn </b></code>
                                    </Item.Description>

                                </Item.Content>
                            </Item>

                        </Item.Group>
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