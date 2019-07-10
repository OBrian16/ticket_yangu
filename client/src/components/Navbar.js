import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Divider, Grid, Header, Icon, Image, List, Menu, Responsive, Segment, Sidebar, Visibility } from 'semantic-ui-react'
import Logo from './Header'

class Navbar extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => {
        this.setState({
            activeItem: name
        })
    }

    render() {
        const { activeItem } = this.state

        return (
            <Menu size='small' fixed=''>

                <Menu.Menu>
                    <Image size='small' position='center'>
                        <Logo />
                    </Image>
                </Menu.Menu>

                <Menu secondary>
                    <Menu.Item
                        as={Link} name='HOME' to='/'
                        active={activeItem === 'home'}
                        onClick={this.handleItemClick} >
                        <Icon name='home' size='big' />
                    </Menu.Item>

                    <Menu.Item
                        as={Link} name='EVENTS' to='Events'
                        active={activeItem === 'events'}
                        onClick={this.handleItemClick} />

                    <Menu.Item
                        as={Link} name='BLOGS' to='ViewEvent'
                        active={activeItem === 'viewEvent'}
                        onClick={this.handleItemClick} />

                    <Menu.Item
                        as={Link} name='CONTACTS' to='/Contacts'
                        active={activeItem === 'contacts'}
                        onClick={this.handleItemClick} />
                </Menu>

                <Menu.Menu position='right'>

                    <Menu.Item>
                        <div className="col s6">
                            <Link
                                to="/login"
                                style={{
                                    width: "140px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px"
                                }}
                                className="btn btn-large btn-flat waves-effect white black-text"
                            >
                                Log In
                            </Link>
                        </div>
                    </Menu.Item>

                    <Menu.Item>
                        <div className="col s6">
                            <Link
                                to="/register"
                                style={{
                                    width: "140px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px"
                                }}
                                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                            >
                                Register
                            </Link>
                        </div>
                    </Menu.Item>

                    <Menu.Item>
                        <Button as={Link} name='tickets' to='Tickets' color='teal' >
                            <Icon name='ticket' />
                            Tickets
                            </Button>
                    </Menu.Item>

                </Menu.Menu>
            </Menu >
        )
    }
}

export default Navbar;