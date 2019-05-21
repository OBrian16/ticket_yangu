import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { registerUser } from '../actions/authentification';
import classnames from 'classnames';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

class Register extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            password_confirm: '',
            errors: {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password_confirm: this.state.password_confirm
        }
        this.props.registerUser(user, this.props.history);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    render() {
        const { errors } = this.state;
        return (
            <div className="container"
                style={{ marginTop: '50px', width: '700px' }}>
                <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>

                        <Header as='h2' color='teal' textAlign='center'>
                            <Image src='/logo.png' /> Create Your Account
                    </Header>

                        <Form onSubmit={this.handleSubmit} size='large'>
                            <Segment stacked>
                                <Form.Input
                                    icon=''
                                    iconPosition='left'
                                    type="text"
                                    placeholder="Name"
                                    name="name"
                                    onChange={this.handleInputChange}
                                    value={this.state.name}
                                />

                                {errors.name && (<div className="invalid-feedback">{errors.name}</div>)}

                                <Form.Input
                                    fluid
                                    icon='user'
                                    iconPosition='left'
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    onChange={this.handleInputChange}
                                    value={this.state.email}
                                />

                                {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}

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

                                {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}

                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    type="password"
                                    placeholder="Confirm Password"
                                    name="password_confirm"
                                    onChange={this.handleInputChange}
                                    value={this.state.password_confirm}
                                />

                                {errors.password_confirm && (<div className="invalid-feedback">{errors.password_confirm}</div>)}

                                <Button color='teal' fluid size='large'>
                                    Register
                                </Button>

                            </Segment>
                        </Form>

                        <Message>
                            CCCCCCCCCCC
                        </Message>

                    </Grid.Column>
                </Grid>
            </div >
        )
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register))