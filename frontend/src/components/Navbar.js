import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Menu, Icon, Label } from 'semantic-ui-react';

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
                    <Menu.Item>
                        <Button as={Link} name='login' to='Login' color='red' labelPosition='right'>
                            <Button color='red'>
                                <Icon name='lock' />
                                Login
                            </Button>
                        </Button>

                        <Button as={Link} name='register' to='Register' labelPosition='right'>
                            <Button color='blue'>
                                <Icon name='user' />
                                Register
                            </Button>
                        </Button>

                    </Menu.Item>
                </Menu.Menu>
            </Menu >
        )
    }
}



export default Navbar;