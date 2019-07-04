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
                        as={Link} name='BLOGS' to='/'
                        active={activeItem === 'blogs'}
                        onClick={this.handleItemClick} />

                    <Menu.Item
                        as={Link} name='CONTACT' to='/'
                        active={activeItem === 'contact'}
                        onClick={this.handleItemClick} />
                </Menu>

                <Menu.Menu position='right'>

                    <Menu.Item>
                        <Button as={Link} name='login' to='Login' color='red' >
                            <Icon name='lock' />
                            Login
                            </Button>
                    </Menu.Item>

                    <Menu.Item>
                        <Button as={Link} name='register' to='Register' color='blue' >
                            <Icon name='user' />
                            Register
                            </Button>
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