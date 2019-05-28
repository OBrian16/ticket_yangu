import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Menu, Icon, Image } from 'semantic-ui-react';

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

                <Menu.Menu position=''>
                    <Image
                        src=''
                        as={Link} to='/'
                        size='tiny'
                    />
                </Menu.Menu>

                <Menu icon='labeled'>
                    <Menu.Item as={Link} name='home' to='/'
                        activeItem={activeItem === 'home'}
                        onClick={this.handleItemClick}>
                        <Icon name='home' />
                    </Menu.Item>
                </Menu>

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
                    <Menu.Item>

                        <Button as={Link} name='login' to='Login' color='red' >
                            <Icon name='lock' />
                            Login
                        </Button>

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