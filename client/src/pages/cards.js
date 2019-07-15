import React from 'react'
import { Card, Icon, Image, CardGroup, Button, Divider, Segment } from 'semantic-ui-react'
// import { Link } from 'react-router-dom';


const EventCard = () => (
    <Card.Group itemsPerRow={4}>

        <Card color='' link>
            <Image src={require('../images/eventImages/dfd.jpg')}
                wrapped ui={false} />
            <Card.Content>
                <Card.Header>Design For Designers</Card.Header>
                <Card.Meta><b><code>FRI 26TH JULY</code></b></Card.Meta>
            </Card.Content>
        </Card>

        <Card color='' link>
            <Image src={require('../images/eventImages/ols.jpg')}
                wrapped ui={false} />
            <Card.Content>
                <Card.Header>Old School Mondays</Card.Header>
                <Card.Meta><b><code>MON 30TH JULY</code></b></Card.Meta>

            </Card.Content>
        </Card>

        <Card color='' link>
            <Image src={require('../images/eventImages/etana.jpg')}
                wrapped ui={false} />
            <Card.Content>
                <Card.Header>Etana Live</Card.Header>
                <Card.Meta><b><code>SAT 21ST AUGUST</code></b></Card.Meta>

            </Card.Content>
        </Card>

        <Card color='' link>
            <Image src={require('../images/eventImages/mkms.jpg')}
                wrapped ui={false} />
            <Card.Content>
                <Card.Header>My Kenya My Story</Card.Header>
                <Card.Meta><b><code>SUN 28TH AUGUST</code></b></Card.Meta>
            </Card.Content>
        </Card>

    </Card.Group>
)

export default EventCard