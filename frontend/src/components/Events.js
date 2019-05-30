import React, { Component } from 'react'
import { Container, Divider, Grid, Header, Icon } from 'semantic-ui-react'


class Events extends Component {
    render() {
        return (
            <Container>
                <style>{`
              html, body {
                background-color: #F2F3F4 !important;
              }
              p {
                align-content: center;
                background-color: #495285;
                color: #fff;
                display: flex;
                flex-direction: column;
                justify-content: center;
                min-height: 20em;
              }
              p > span {
                opacity: 0.4;
                text-align: center;
              }
              }
            `}
                </style>

                <Header as='h2' inverted textAlign='center'>
                    Celled
                </Header>

                <Grid columns={3}>
                    <Grid.Row>
                        <Grid.Column>
                            <p />
                        </Grid.Column>
                        <Grid.Column>
                            <p />
                        </Grid.Column>
                        <Grid.Column>
                            <p />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <p />
                        </Grid.Column>
                        <Grid.Column>
                            <p />
                        </Grid.Column>
                        <Grid.Column>
                            <p />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        );
    }
}

export default Events