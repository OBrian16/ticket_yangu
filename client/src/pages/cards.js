import React from 'react'
import { Card, Image, Popup, Rating } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const EventCard = () => (
    <Card.Group itemsPerRow={4}>

        <Popup
            trigger={
                <Card color='grey'
                    as={Link} name='EVENTS' to='ViewEvent'>
                    <Image src={require('../images/eventImages/dfd.jpg')}
                        wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>Design For Designers</Card.Header>
                        <Card.Meta><b><code>FRI 26TH JULY</code></b></Card.Meta>
                    </Card.Content>
                </Card>
            }
        >
            <Popup.Header>Event Rating</Popup.Header>
            <Popup.Content>
                <Rating icon='star' defaultRating={4} maxRating={5} />
            </Popup.Content>
        </Popup>

        <Popup
            trigger={
                <Card color='grey' link>
                    <Image src={require('../images/eventImages/ols.jpg')}
                        wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>Old School Mondays</Card.Header>
                        <Card.Meta color><b><code>MON 30TH JULY</code></b></Card.Meta>

                    </Card.Content>
                </Card>
            }
        >
            <Popup.Header>Event Rating</Popup.Header>
            <Popup.Content>
                <Rating icon='star' defaultRating={5} maxRating={5} />
            </Popup.Content>
        </Popup>

        <Popup
            trigger={
                <Card color='grey' link>
                    <Image src={require('../images/eventImages/etana.jpg')}
                        wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>Etana Live</Card.Header>
                        <Card.Meta><b><code>SAT 21ST AUGUST</code></b></Card.Meta>

                    </Card.Content>
                </Card>
            }
        >
            <Popup.Header>Event Rating</Popup.Header>
            <Popup.Content>
                <Rating icon='star' defaultRating={3} maxRating={5} />
            </Popup.Content>
        </Popup>

        <Popup
            trigger={
                <Card color='grey' link>
                    <Image src={require('../images/eventImages/mkms.jpg')}
                        wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>My Kenya My Story</Card.Header>
                        <Card.Meta><b><code>SUN 28TH AUGUST</code></b></Card.Meta>
                    </Card.Content>
                </Card>
            }
        >
            <Popup.Header>Event Rating</Popup.Header>
            <Popup.Content>
                <Rating icon='star' defaultRating={2} maxRating={5} />
            </Popup.Content>
        </Popup>

    </Card.Group>
)

export default EventCard