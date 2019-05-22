import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Menu, Icon, } from 'semantic-ui-react';

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
                <Menu.Item as={Link} name='home' to='/'
                    activeItem={activeItem === 'home'}
                    onClick={this.handleItemClick}
                />

                <Menu.Item as={Link} name='events' to='#'
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
                    <Menu.Item as={Link} name='Login' to="Login">
                        <Button primary>Login</Button>
                    </Menu.Item>

                    <Menu.Item as={Link} name='Register' to="Register">
                        <Button primary>Register</Button>
                    </Menu.Item>

                    <Menu.Item as={Link} name='Check Ticket' to="#">
                        <Button primary>Ticket</Button>
                    </Menu.Item>
                </Menu.Menu>
            </Menu >
        )
    }
}
export default Navbar;