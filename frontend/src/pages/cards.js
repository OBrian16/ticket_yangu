import React from 'react'
import { Card, Icon, Image, CardGroup } from 'semantic-ui-react'

const EventCard = () => (
    <Card.Group itemsPerRow={4}>

        <Card>
            <Image src='/images/avatar/large/daniel.jpg' wrapped ui={false} />
            <Card.Content>
                <Card.Header>Event 1</Card.Header>
                <Card.Meta>26TH JULY</Card.Meta>
                <Card.Description>
                    Event Description
                </Card.Description>
            </Card.Content>
        </Card>

        <Card>
            <Image src='/images/avatar/large/daniel.jpg' wrapped ui={false} />
            <Card.Content>
                <Card.Header>Event 2</Card.Header>
                <Card.Meta>26TH JULY</Card.Meta>
                <Card.Description>
                    Event Description
                </Card.Description>
            </Card.Content>
        </Card>

        <Card>
            <Image src='/images/avatar/large/daniel.jpg' wrapped ui={false} />
            <Card.Content>
                <Card.Header>Event 3</Card.Header>
                <Card.Meta>26TH JULY</Card.Meta>
                <Card.Description>
                    Event Description
                </Card.Description>
            </Card.Content>
        </Card>

        <Card>
            <Image src='/images/avatar/large/daniel.jpg' wrapped ui={false} />
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