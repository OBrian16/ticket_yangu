import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'


class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <Grid textAlign='center' style={{ height: '60vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>

          <Header as='h2' color='blue' textAlign='center'>
            <Image src='/logo.png' />Create your account
          </Header>

          <Form size='large' noValidate onSubmit={this.onSubmit}>
            <Segment stacked >
              <Form.Input
                fluid
                icon='user'
                iconPosition='left'
                placeholder='Name'
                onChange={this.onChange}
                value={this.state.name}
                error={errors.name}
                id="name"
                type="text"
                className={classnames("", {
                  invalid: errors.name
                })}
              />
              <span className="red-text">{errors.name}</span>

              <Form.Input
                fluid
                icon='at'
                iconPosition='left'
                placeholder='E-mail address'
                onChange={this.onChange}
                value={this.state.email}
                error={errors.email}
                id="email"
                type="email"
                className={classnames("", {
                  invalid: errors.email
                })}
              />
              <span className="red-text">{errors.email}</span>

              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                onChange={this.onChange}
                value={this.state.password}
                error={errors.password}
                id="password"
                type="password"
                className={classnames("", {
                  invalid: errors.password
                })}
              />
              <span className="red-text">{errors.password}</span>

              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                onChange={this.onChange}
                value={this.state.password2}
                error={errors.password2}
                id="password2"
                type="password"
                className={classnames("", {
                  invalid: errors.password2
                })}
              />
              <span className="red-text">{errors.password2}</span>

              <Button color='blue' fluid size='large' type='submit' floated='left  ' >
                Register
              </Button>
              <p></p>
              <Link to="/" >
                Back to home
              </Link>

            </Segment>
          </Form>

          <Message>
            Already have an account? <Link to="/login">Log in</Link>
          </Message>

        </Grid.Column>
      </Grid>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
