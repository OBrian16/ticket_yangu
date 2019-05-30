import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Menu, Icon, Image, Divider } from 'semantic-ui-react';
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
            <Menu size='large'>

                <Menu.Menu position='' size='tiny'>
                    <Logo />
                </Menu.Menu>

                <Menu icon='labeled'>
                    <Menu.Item as={Link} name='home' to='/'
                        activeItem={activeItem === 'home'}
                        onClick={this.handleItemClick}>
                        <Icon name='home' />
                    </Menu.Item>
                </Menu>

                <Menu.Item as={Link} name='events' to='Events'
                    activeItem={activeItem === 'events'}
                    onClick={this.handleItemClick}
                />

                <Menu.Item as={Link} name='blog' to='#'
                    activeItem={activeItem === 'blog'}
                    onClick={this.handleItemClick}
                />

                <Menu.Item as={Link} name='contact' to='#'
                    activeItem={activeItem === 'contact'}
                    onClick={this.handleItemClick}
                />

                <Menu.Menu position='right'>
                    <Menu.Item>

                        <Button as={Link} name='login' to='Login' color='grey' >
                            <Icon name='lock' />
                            Login
                        </Button>
                                <Divider />
                        <Button as={Link} name='register' to='Register' color='blue' >
                            <Icon name='user' />
                            Register
                        </Button>

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