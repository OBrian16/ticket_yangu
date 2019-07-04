import React from 'react'
import { Card, Icon, Image, CardGroup } from 'semantic-ui-react'

const EventCard = () => (
    <Card.Group itemsPerRow={4}>

        <Card>
        <Image src={require('../images/eventImages/dfd.jpg')}
            
            wrapped ui={false} />
            <Card.Content>
                <Card.Header>Event 1</Card.Header>
                <Card.Meta><b><code>26TH JULY</code></b></Card.Meta>
                <Card.Description>
                    Event Description
                </Card.Description>
            </Card.Content>
        </Card>

        <Card>
            <Image src={require('../images/eventImages/ols.jpg')}
                wrapped ui={false} />
            <Card.Content>
                <Card.Header>Event 2</Card.Header>
                <Card.Meta>26TH JULY</Card.Meta>
                <Card.Description>
                    Event Description
                </Card.Description>
            </Card.Content>
        </Card>

        <Card>
        <Image src={require('../images/eventImages/etana.jpg')}
            wrapped ui={false} />
            <Card.Content>
                <Card.Header>Event 3</Card.Header>
                <Card.Meta>26TH JULY</Card.Meta>
                <Card.Description>
                    Event Description
                </Card.Description>
            </Card.Content>
        </Card>

        <Card>
        <Image src={require('../images/eventImages/mkms.jpg')}
            wrapped ui={false} />
            <Card.Content>
                <Card.Header>Event 4</Card.Header>
                <Card.Meta>26TH JULY</Card.Meta>
                <Card.Description>
                    Event Description
                </Card.Description>
            </Card.Content>
        </Card>

    </Card.Group>
)

export default EventCard