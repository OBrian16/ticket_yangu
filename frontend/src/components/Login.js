import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'


class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password,
        }
        console.log(user);
    }

    render() {
        return (
            <div className="container"
                style={{ marginTop: '50px', width: '700px' }}>
                <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>

                        <Header as='h2' color='teal' textAlign='center'>
                            <Image src='/logo.png' /> Log-in to your account
                        </Header>

                        <Form onSubmit={this.handleSubmit} size='large' >
                            <Segment stacked>
                                <Form.Input
                                    icon='user'
                                    iconPosition='left'
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    onChange={this.handleInputChange}
                                    value={this.state.email}
                                />
                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    onChange={this.handleInputChange}
                                    value={this.state.password}
                                />
                                <Button color='teal' fluid size='large'>
                                    Login
                                </Button>
                            </Segment>
                        </Form>

                        <Message>
                            New to us? <a href=''>Sign Up</a>
                        </Message>

                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default Login;