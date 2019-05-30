import React, { Component } from 'react'
import { Container, Divider, Grid, Header, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom';



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
                background-color: #BFC9CA;
                color: #fff;
                display: flex;
                flex-direction: column;
                justify-content: center;
                min-height: 18em;
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

                <Grid columns={4}>
                    <Grid.Row>
                        <Grid.Column>
                            <Image as={Link} name='events' to='Events'
                                bordered rounded size='huge'
                                src='/images/white-image.png'
                            />

                        </Grid.Column>
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
