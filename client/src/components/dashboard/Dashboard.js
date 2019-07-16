import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Button, Segment, Header } from 'semantic-ui-react'
import { Link } from "react-router-dom";


class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (

      <Segment
        style={{ padding: '3em 30em' }} vertical
        textAlign='center'
      >
        <Header as='h2' textAlign=''>
          Hey there, {user.name.split(" ")[0]}
          <p></p>
          <Header.Subheader style={{ fontFamily: "monospace" }}>
            You are logged into <b>ticketyangu</b> website
        </Header.Subheader>
        </Header>

        <Button color='blue' size='large' type='submit' floated='left  '
          onClick={this.onLogoutClick}
        >
          Logout
            </Button>

        <Link to="/" >
          Back to home
              </Link>

      </Segment>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
