import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

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

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
      <Grid textAlign='center' style={{ height: '70vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>

          <Header as='h2' color='blue' textAlign='center'>
            <Image src='/logo.png' /> Log-in to your account
          </Header>

          <Form size='large' noValidate onSubmit={this.onSubmit}>
            <Segment stacked >
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
                  invalid: errors.email || errors.emailnotfound
                })}
              />
              <span className="red-text">
                {errors.email}
                {errors.emailnotfound}
              </span>

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
                  invalid: errors.password || errors.passwordincorrect
                })}
              />
              <span className="red-text">
                {errors.password}
                {errors.passwordincorrect}
              </span>

              <Button color='blue' fluid size='large' type='submit' floated='left  ' >
                Login
              </Button>
              <p></p>
              <Link to="/" >
                Back to home
              </Link>

            </Segment>
          </Form>

          <Message>
            Don't have an account? <Link to="/register">Register</Link>
          </Message>

        </Grid.Column>
      </Grid >
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
