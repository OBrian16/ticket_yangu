import React from 'react'
import { Card, Icon, Image, CardGroup, Button, Divider, Segment } from 'semantic-ui-react'
// import { Link } from 'react-router-dom';


const EventCategory = () => (
    <Card.Group itemsPerRow={7}>

        <Card color='' link>
            <Image src={require('../images/eventCategory/festival.jpg')}
                wrapped ui={false} />
            <Card.Content>
                <Card.Header>Festivals</Card.Header>
            </Card.Content>
        </Card>

        <Card color='' link>
            <Image src={require('../images/eventImages/ols.jpg')}
                wrapped ui={false} />
            <Card.Content>
                <Card.Header>Concerts</Card.Header>
            </Card.Content>
        </Card>

        <Card color='' link>
            <Image src={require('../images/eventImages/etana.jpg')}
                wrapped ui={false} />
            <Card.Content>
                <Card.Header>Corporate</Card.Header>
            </Card.Content>
        </Card>

        <Card color='' link>
            <Image src={require('../images/eventImages/mkms.jpg')}
                wrapped ui={false} />
            <Card.Content>
                <Card.Header>Sports</Card.Header>
            </Card.Content>
        </Card>

        <Card color='' link>
            <Image src={require('../images/eventImages/dfd.jpg')}
                wrapped ui={false} />
            <Card.Content>
                <Card.Header>Club Nights</Card.Header>
            </Card.Content>
        </Card>

        <Card color='' link>
            <Image src={require('../images/eventCategory/festival.jpg')}
                wrapped ui={false} />
            <Card.Content>
                <Card.Header>Theatre & Comedy</Card.Header>
            </Card.Content>
        </Card>

        <Card color='' link>
            <Image src={require('../images/eventImages/etana.jpg')}
                wrapped ui={false} />
            <Card.Content>
                <Card.Header>Dayouts</Card.Header>
            </Card.Content>
        </Card>

    </Card.Group>
)

export default EventCategory